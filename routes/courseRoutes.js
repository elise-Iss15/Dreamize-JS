const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../controllers/courseController");

router.post("/create", createCourse);

router.get("/getAll", getAllCourses);

router.put("/update/:id", updateCourse);

router.delete("/delete/:id", deleteCourse);

router.get("/get/:id", getCourseById);

module.exports = router;
