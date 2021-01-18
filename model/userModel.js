const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
	name:{
		type:String,
		require:true
    },
	email:{
		type:String,
		require:true
	},
	type:{
		default:'forum',
		type:String
	},
	pwd:{
		type:String,
		require:true
	},
})

const userModel=mongoose.model('userModel', userSchema);
module.exports= userModel