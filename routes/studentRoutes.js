const express = require("express");
const router = express.Router();

const {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllUsers, // Kept here if you want it under the /api/students path as well
} = require("../controllers/studentController");

const { protect } = require("../middleware/protect");

/**
 * @swagger
 * tags:
 *   - name: Students
 *     description: Student profile and data management
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: Enter your JWT token to access protected routes.
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
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
 */

/**
 * @swagger
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
 */
router.get("/students", getAllUsers);

// --- PROTECTED ROUTES ---
// The protect middleware ensures a valid token is provided for all routes below
router.use(protect);

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
 *             $ref: '#/components/schemas/Student'
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
 *       401:
 *         description: Unauthorized
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
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
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Student not found
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
 *         description: Unauthorized
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.delete("/students/:id", deleteStudent);

module.exports = router;
