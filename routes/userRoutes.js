const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllUsers,
} = require("../controllers/authController");


/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: User authentication and management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           example: 64a1f2c3e4b5d6f7a8b9c0d1
 *         email:
 *           type: string
 *           example: jane@gmail.com
 *         password:
 *           type: string
 *           example: password123
 *         role:
 *           type: string
 *           enum: [student, admin]
 *           example: student
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.post("/register", register);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Invalid email or password
 *       500:
 *         description: Server error
 */
router.post("/login", login);

/**
 * @swagger
 * /api/users/users:
 *   get:
 *     summary: Get all registered users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUsers);

module.exports = router;
