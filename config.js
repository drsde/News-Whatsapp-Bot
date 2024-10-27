const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


module.exports = {
  PREFIX: ".", //set Prefix
  OWNER: "94753574803",//Enter Owner Number
  USER_NAME: "DEXTER",//Enter Your UserName 
  PASSWORD: "12345678",
  HIRU_GROUP_JID: ["120363351441816765@g.us"],
  DERANA_GROUP_JID: ["120363351441816765@g.us"],
  ESANA_GROUP_JID: ["120363351441816765@g.us"],
  NASA_GROUP_JID: ["120363351441816765@g.us"],
  TECH_GROUP_JID: ["120363351441816765@g.us"],
  NOTICE_GROUP_JID: ["120363351441816765@g.us"]
};
