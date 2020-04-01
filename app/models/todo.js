const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nodemailer = require("nodemailer");
const cron = require("node-cron");


const todoSchema = new Schema({
 taskName: {
  type: String,
  required: true
 },
 priority: {
  type: String,
  required: true
 },
 message: {
  type: String,
  required: true,
  minlength: 5
 },
 complitionStatus: {
  type: Boolean,
  default: false
 },
 startDate: {
  type: Date,
  required: true,
  default: new Date().setHours(00, 00, 00)
 },
 expiryDate: {
  type: Date,
  required: true,
  default: new Date().setHours(23, 59, 59),
  validate: [dateValidator, "Start Date must be less than End Date"]
 }
});


function dateValidator(value) {
 return this.startDate <= value;
}

todoSchema.post("save", function (doc) {
 // create mail transporter
 let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: "shivaslb72@gmail.com",
   pass: "8150020931"
  }
 });

 // sending emails at periodic intervals
 cron.schedule('* * * * tuesday', function () {
  console.log("hi there");
  console.log("Running Cron Job");

  //step2
  let mailOption = {
   from: "shivaslb72@gmail.com",
   to: "shivaslb72@gmail.com",
   subject: "Testing and Testing",
   text: "your TASK has been created"
  };

  //step3
  transporter.sendMail(mailOption, function (err, data) {
   if (err) {
    console.log("Error Occcurs");
   } else {
    console.log("Email sent!!");
    return Promise.resolve(doc);
   }
  });
 });
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;