const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res) => {
    console.log(req.body)
    const { name, email, pwd } = req.body

    if (!name || !email || !pwd) {
        return res.status(400).json({ message: "name , email , pwd is required" })
    } else {
        userModel.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    return res.status(400).json({ message: "User existing !!!" })
                }
                bcrypt.hash(req.body.pwd, 13, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ message: "Server error !!!" })
                    }
                    userModel.find()
                        .then(users => {
                            if (users.length < 1) {
                                new userModel({
                                    name: req.body.name,
                                    email: req.body.email,
                                    pwd: hash,
                                    type: 'admin'
                                }).save()
                                    .then(user => {
                                        console.log(user)
                                        console.log('user registered')
                                        res.status(200).json({ message: 'Register successfull !!', user })
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        res.status(500).json({ message: "Server error !!" })
                                    })
                            } else {
                                new userModel({
                                    name: req.body.name,
                                    email: req.body.email,
                                    pwd: hash,
                                }).save()
                                    .then(user => {
                                        console.log(user)
                                        console.log('user registered')
                                        res.status(200).json({ message: 'Register successfull !!', user })
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        res.status(500).json({ message: "Server error !!" })
                                    })
                            }

                        })
                })
            })
    }
}

const login = (req, res) => {
    const { email, pwd } = req.body
    if (!email || !pwd) {
        return res.status(400).json({ message: "Email and Password is required" })
    }

    userModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: "User not founded !!" })
            }
            bcrypt.compare(pwd, user.pwd, (err, success) => {
                if (err) {
                    return res.status(500).json({ message: "Servder error occurd" })
                }
                if (!success) {
                    return res.status(400).json({ message: "Wrong password provided!!" })
                }
                let token = jwt.sign({
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    type: user.type
                }, 'st_app', { expiresIn: '4h' })

                return res.status(200).json({ token: token, user: user })
            })
        })
        .catch(err => {
            res.json({ message: "Server error" })
        })

}
const deleteUser = (req, res) => {
    console.log('delete')
    userModel.findByIdAndDelete(req.params.id)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'server error occurd ' })
        })
}
const findUser = (req, res) => {
    userModel.find({ type: 'forum' })
        .then(users => {
            return res.json(users)
        })
        .catch(err => {
            return res.json(err)
        })
}
const findModerator = (req, res) => {
    userModel.find({ type: 'moderator' })
        .then(users => {
            return res.json(users)
        })
        .catch(err => {
            return res.json(err)
        })
}
const promoteToModerator = (req, res) => {
    userModel.findOne({ _id: req.params.id })
        .then(user => {
            user.type = 'moderator'
            user.save()
                .then(result => {
                    res.json(result)
                })
        })
        .catch(err => {
            return res.json(err)
        })
}
const demoteToUser = (req, res) => {
    userModel.findOne({ _id: req.params.id })
        .then(user => {
            user.type = 'forum'
            user.save()
                .then(result => {
                    res.json(result)
                })
        })
        .catch(err => {
            return res.json(err)
        })
}
module.exports = {
    deleteUser,
    register,
    login,
    findUser,
    findModerator,
    promoteToModerator,
    demoteToUser

}