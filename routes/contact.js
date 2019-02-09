let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the contact model
let contact = require("../models/contact");

/* GET contact list page - READ */
router.get("/", (req, res, next) => {
  contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      // console.log(contactList);

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList
      });
    }
  });
});

// GET the Add page for the Contact-List
router.get("/add", (req, res, next) => {
  res.render("contacts/add", {
    title: "Add a new Contact"
  });
});

// POST-process the Add page for the Contact-List
router.post("/add", (req, res, next) => {
  let newContact = contact({
    firstName: req.body.FirstNameTextField,
    lastName: req.body.LastNameTextField,
    age: req.body.AgeTextField
  });
  contact.create(newContact, (err, contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //takes the user back to the contact-list
      res.redirect("/contact-list");
    }
  });
});
module.exports = router;
