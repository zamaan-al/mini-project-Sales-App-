const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students");
const upload=require("../middlewarws/multerMiddleware")

router.post("/", upload.single("image"), studentsController.postStudent);           // create student
router.get("/", studentsController.allStudents);                                     // get all students
                        // get single student
router.put("/:studentId", upload.single("image"), studentsController.updateStudent); // update student
router.delete("/:studentId", studentsController.deleteStudent);                      // delete student

module.exports = router;
