const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    default: function () {
      return `STU-${Date.now()}`;
    },
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },
});

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
