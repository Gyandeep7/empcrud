// src/routes/employeeRoutes.ts
import express from 'express';
import * as employeeController from '../controllers/employeeController';

const router = express.Router();

router.get('/employees', employeeController.getAllEmployees);
router.post('/employees', employeeController.createEmployee);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

export default router;
