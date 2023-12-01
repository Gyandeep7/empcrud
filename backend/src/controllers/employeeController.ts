// src/controllers/employeeController.ts
import { Request, Response } from 'express';
import Employee from '../models/Employee';

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, position, salary } = req.body;
    const newEmployee = new Employee({ name, position, salary });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, position, salary } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, position, salary },
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
