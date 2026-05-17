const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllUsers,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const { protect, restrictTo } = require("../middleware/protect");

/**
 * @swagger
 * components:
 *  schemas:
 *     Student:
 *          type: object
 *          required:
 *              - name
 *              - email
 *          properties:
 *              name:
 *                  type: string
 *                  description: The student's name
 *              email:
 *                  type: string
 *                  description: The student's email
 *              country:
 *                  type: string
 *                  description: The student's country
 *              skills:
 *                  type: array
 *                  items:
 *                      type: string
 *                  description: The student's skills
 *              role:
 *                  type: string
 *                  description: The student's role
 *                  enum: [student, admin]
 */

/**
 * @swagger
 * /api/auth/register:
 *      post:
 *          summary: Register a new user
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Student'
 *          responses:
 *              201:
 *                  description: User registered successfully
 *              500:
 *                  description: Server error
 *
 */
/**
 * @swagger
 * /api/students:
 *      get:
 *          summary: Get all students
 *          tags: [Students]
 *          responses:
 *              200:
 *                  description: A list of students
 *              500:
 *                  description: Server error
 *
 */
router.post("/auth/register", register);
router.post("/auth/login", login);

router.get("/students", getAllUsers);

router.use(protect);

router.post("/students", createStudent);
router.patch("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

module.exports = router;
