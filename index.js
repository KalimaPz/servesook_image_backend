
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080

let image = [
  {
    "id" : 0,
    "key" : 'now',
    "link" : '',
  },
  {
    "id" : 1,
    "key" : 'today',
    "link" : '',
  },
  {
    "id" : 2,
    "key" : 'yesterday',
    "link" : '',
  },
  {
    "id" : 3,
    "key" : 'two_days_ago',
    "link" : '',
  },
]

let imageUri = {
  "imageUri ": [
    'https://firebasestorage.googleapis.com/v0/b/servesook-farm-alpha.appspot.com/o/768px-Round_Landmark_School_Icon_-_Transparent.svg.png?alt=media&token=7b65d4bc-abf2-496f-933d-1f3c1cd38fa1',
    'https://firebasestorage.googleapis.com/v0/b/servesook-farm-alpha.appspot.com/o/768px-Round_Landmark_School_Icon_-_Transparent.svg.png?alt=media&token=7b65d4bc-abf2-496f-933d-1f3c1cd38fa1',
    'https://firebasestorage.googleapis.com/v0/b/servesook-farm-alpha.appspot.com/o/768px-Round_Landmark_School_Icon_-_Transparent.svg.png?alt=media&token=7b65d4bc-abf2-496f-933d-1f3c1cd38fa1',
    'https://firebasestorage.googleapis.com/v0/b/servesook-farm-alpha.appspot.com/o/768px-Round_Landmark_School_Icon_-_Transparent.svg.png?alt=media&token=7b65d4bc-abf2-496f-933d-1f3c1cd38fa1',
  ] ,
  "source" : "CCTV"
}


app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  return res.json(imageUri)
});
app.listen(PORT, () => console.log("SERVER IS RUNNING ON ", PORT));
