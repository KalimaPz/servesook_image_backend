
const express = require("express");
const bodyParser = require("body-parser");
const url =
  "https://passport.psu.ac.th/authentication/authentication.asmx?wsdl";
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080

imageList = [
  'https://atlas.wiki.fextralife.com/file/Atlas/thyme_consumables_resources_atlas_mmo_game_wiki_guide.png',
  'https://cdn140.picsart.com/293417907033201.jpg?type=webp&to=crop&r=256',
  'https://static.wixstatic.com/media/4ac3a6_27ff6ced29084838ac7e40b660e9f7ad~mv2.jpg/v1/fill/w_256,h_256,al_c,lg_1,q_85/4ac3a6_27ff6ced29084838ac7e40b660e9f7ad~mv2.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHa7oZ-G_irdRI3_FQeqQMFfzSNEydjoo7lg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxE4ksxFS1PLMN1XOx4H_da6JuV8wJKewK-Q&usqp=CAU',
]

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  return res.json(imageList)
});
app.listen(PORT, () => console.log("SERVER IS RUNNING ON ", PORT));
