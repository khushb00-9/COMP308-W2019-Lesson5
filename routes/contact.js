let express = require("express");
let router = express.Router();

// create a reference to the contact model
let contact = require("../models/contact");

/* GET contact list page - read*/
router.get("/", (req, res, next) => {
  contact.find((err, contactsList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(contactsList);
      /*
            res.render('contacts/index',{
                title: 'Contacts List',
                contactsList: contactList
            });*/
    }
  });
});
module.exports = router;
