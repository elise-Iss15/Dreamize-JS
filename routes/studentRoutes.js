const express = require("express");
const router = express.Router();

const {
<<<<<<< HEAD
  createStudent,
  updateStudent,
  deleteStudent,
  getAllUsers, // Kept here if you want it under the /api/students path as well
=======
  register,
  login,
  getAllUsers,
  createStudent,
  updateStudent,
  deleteStudent,
>>>>>>> origin/main
} = require("../controllers/studentController");

const { protect } = require("../middleware/protect");

/**
 * @swagger
 * tags:
<<<<<<< HEAD
 *   - name: Students
 *     description: Student profile and data management
=======
 *   - name: Auth
 *     description: Student registration and login
 *   - name: Students
 *     description: Student management
>>>>>>> origin/main
 */

/**
 * @swagger
 * components:
<<<<<<< HEAD
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: Enter your JWT token to access protected routes.
 *   schemas:
 *     Student:
=======
 *   schemas:
 *     StudentRegister:
>>>>>>> origin/main
 *       type: object
 *       required:
 *         - name
 *         - email
<<<<<<< HEAD
=======
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: Jane Doe
 *         email:
 *           type: string
 *           example: jane@gmail.com
 *         password:
 *           type: string
 *           example: password123
 *         country:
 *           type: string
 *           example: Rwanda
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           example: ["JavaScript", "Node.js", "MongoDB"]
 *         role:
 *           type: string
 *           enum: [student, admin]
 *           example: student
 *
 *     StudentLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: jane@gmail.com
 *         password:
 *           type: string
 *           example: password123
 *
 *     StudentResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               example: 64a1f2c3e4b5d6f7a8b9c0d1
 *             name:
 *               type: string
 *               example: Jane Doe
 *             email:
 *               type: string
 *               example: jane@gmail.com
 *             role:
 *               type: string
 *               example: student
 *
 *     Student:
 *       type: object
>>>>>>> origin/main
 *       properties:
 *         _id:
 *           type: string
 *           example: 64a1f2c3e4b5d6f7a8b9c0d1
 *         name:
 *           type: string
 *           example: Jane Doe
 *         email:
 *           type: string
 *           example: jane@gmail.com
 *         country:
 *           type: string
 *           example: Rwanda
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           example: ["JavaScript", "Node.js", "MongoDB"]
 *         role:
 *           type: string
 *           example: student
<<<<<<< HEAD
=======
 *
 *     StudentUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Jane Updated
 *         email:
 *           type: string
 *           example: janeupdated@gmail.com
 *         country:
 *           type: string
 *           example: Kenya
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Python", "Django"]
 *         role:
 *           type: string
 *           enum: [student, admin]
 *           example: admin
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *
 *     NotFoundResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
>>>>>>> origin/main
 */

/**
 * @swagger
<<<<<<< HEAD
=======
 * /api/auth/register:
 *   post:
 *     summary: Register a new student
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentRegister'
 *     responses:
 *       201:
 *         description: Student registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/auth/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a student
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentLogin'
 *     responses:
 *       200:
 *         description: Login successful — copy the token and use it in the Authorize button
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       401:
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Invalid email or password
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/auth/login", login);
/**
 * @swagger
>>>>>>> origin/main
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Server error
<<<<<<< HEAD
 */
router.get("/students", getAllUsers);

// --- PROTECTED ROUTES ---
// The protect middleware ensures a valid token is provided for all routes below
router.use(protect);

=======
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/students", getAllUsers);
router.use(protect);
>>>>>>> origin/main
/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student (requires JWT)
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
<<<<<<< HEAD
 *             $ref: '#/components/schemas/Student'
=======
 *             $ref: '#/components/schemas/StudentRegister'
>>>>>>> origin/main
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Student'
 *       400:
 *         description: Bad request
<<<<<<< HEAD
 *       401:
 *         description: Unauthorized
=======
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized — token missing or invalid
>>>>>>> origin/main
 */
router.post("/students", createStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   patch:
 *     summary: Update a student by ID (requires JWT)
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student ID
<<<<<<< HEAD
=======
 *         example: 64a1f2c3e4b5d6f7a8b9c0d1
>>>>>>> origin/main
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
<<<<<<< HEAD
 *             $ref: '#/components/schemas/Student'
=======
 *             $ref: '#/components/schemas/StudentUpdate'
>>>>>>> origin/main
 *     responses:
 *       200:
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Student'
 *       400:
 *         description: Bad request
<<<<<<< HEAD
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Student not found
=======
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized — token missing or invalid
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundResponse'
>>>>>>> origin/main
 */
router.patch("/students/:id", updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student by ID (requires JWT)
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student ID
<<<<<<< HEAD
=======
 *         example: 64a1f2c3e4b5d6f7a8b9c0d1
>>>>>>> origin/main
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Student deleted successfully
 *       401:
<<<<<<< HEAD
 *         description: Unauthorized
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
=======
 *         description: Unauthorized — token missing or invalid
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
>>>>>>> origin/main
 */
router.delete("/students/:id", deleteStudent);

module.exports = router;
