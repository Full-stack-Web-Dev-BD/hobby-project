const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require('mongoose')
const app = express();

// alowing cross origin requests
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// importng Routes


const userRoute = require("./routes/userRoute");
//caliing routes Middelwares
app.use("/user", userRoute);

const PORT = process.env.PORT || 4500;


if(process.env.NODE_ENV==='production'){
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {  
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});	
}




app.listen(PORT, () => {
  mongoose.connect('mongodb://localhost/forum-app', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log('Database connected failde ', err)
    } else {
      console.log('Database connected ')
    }
  })
  console.log(`Listening on port ${PORT}`);
});
