let Student = require ("../models/students");


module.exports.postStudent = async (req, res) => {
  
    const studentDetails = {
       ...req.body,
        image: "http://localhost:4000/"+req.file.filename, // Save only the filename to the database
    
    };


try {
    const student = await Student.create(studentDetails);
    res.status(201).json({ message: "Student posted successfully!", student });
    console.log(req.file)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get all students
module.exports.allStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ message: "Students fetched successfully!", students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Update a student by studentId
module.exports.updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const updatedData = req.body;

    const studentToUpdate = await Student.findOne({ studentId });
    if (!studentToUpdate) {
      return res.status(404).json({ message: "Student not found" });
    }

    studentToUpdate.name = updatedData.name || studentToUpdate.name;
    studentToUpdate.email = updatedData.email || studentToUpdate.email;
    studentToUpdate.course = updatedData.course || studentToUpdate.course;

    if (req.file) {
      studentToUpdate.image = req.file.path; // update image if uploaded
    }

    const updatedStudent = await studentToUpdate.save();
    res.status(200).json({ message: "Student updated successfully", updatedStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating student", error: error.message });
  }
};

// Delete a student by studentId
module.exports.deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const deletedStudent = await Student.findOneAndDelete({ studentId });

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found!" });
    }

    res.status(200).json({ message: "Student deleted successfully!" });
  } catch (error) {
    console.error("Delete student error:", error);
    res.status(500).json({ message: error.message });
  }
};
