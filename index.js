
const express = require("express");
const bodyParser = require("body-parser");
const url =
  "https://passport.psu.ac.th/authentication/authentication.asmx?wsdl";
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080

let image = {
  "imageList" : [
    'https://th-live-01.slatic.net/p/bbc847afac4930608b2f2e9b06ae1519.jpg',
    'https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/vg-migration/2018/11/28004024/sage.JPG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScYqBgmWO9Jgsv7WbImqc5mqLQFYM_l8XDew&usqp=CAU',
    'https://images.homedepot-static.com/productImages/11b2e243-983f-4750-ae86-d8ca8f62edcf/svn/gurney-s-vegetable-herb-seeds-14592-64_1000.jpg',
    'https://www.prairieviewfarmmarket.com/wp-content/uploads/2016/03/taragon.jpg',
  ],
  "source" :"CCTV"
}

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  return res.json(image)
});
app.listen(PORT, () => console.log("SERVER IS RUNNING ON ", PORT));
