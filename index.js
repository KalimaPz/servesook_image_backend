const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();
const PORT = 4000;

app.use(cors());
app.use("/api", bodyParser.json(), router);
app.use("/api", bodyParser.urlencoded({ extended: false }, router));

let persons = [
  {
    // For Mockup
    id: 0,
    first_name: "Donnukrit",
    last_name: "Satirakul",
    nick_name: "Phone",
    tel: "091-0533948",
    email: "kalima007c@gmail.com",
    university: "PSU",
    address: {
      home_id: "117/30",
      building: "B",
      street: "Wichitsongkram",
      district: "Kathu",
      province: "Phuket",
      zip_code: "83120",
    },
  },
];
router
  .route("/persons")
  .get((req, res) => res.json(persons))
  .post((req, res) => {
    let person = {};

    if (persons.length > 0) person.id = +persons[persons.length - 1].id + 1;
    else person.id = 0;
    console.log(req.body)
    
    person = {
      id: person.id,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      nick_name : req.body.nick_name,
      tel : req.body.tel,
      email : req.body.email,
      university : req.body.university,
      address : {
        home_id: req.body.address.home_id,
        building: req.body.address.building,
        street: req.body.address.street,
        district: req.body.address.district,
        province: req.body.address.province,
        zip_code: req.body.address.zip_code,
      }
    }
    // console.log(person)
    persons.push(person);
    res.json({ message: "a new person has been created" });
  });
router
  .route("/persons/:person_id")
  .get((req, res) => {
    let id = req.params.person_id;
    let index = persons.findIndex((person) => person.id === +id);
    res.json(persons[index]);
  })
  .put((req, res) => {
    let id = req.param.person_id;
    let index = persons.findIndex((persons) => person.id === +id);

    persons[index].first_name = req.body.first_name;
    persons[index].last_name = req.body.last_name;
    persons[index].tel = req.body.tel;
    persons[index].email = req.body.email;
    persons[index].university = req.body.university;
    // persons[index].location = req.body.location
  })
  .delete((req, res) => {
    let id = req.param.person_id;
    let index = persons.findIndex((person) => person.id === +id);
    persons.slice(index, 1);
    res.json({ message: "a person has been deleted" });
  });
app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(PORT, () => console.log("Server is Running ON : ", PORT));
