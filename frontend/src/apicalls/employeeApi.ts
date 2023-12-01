// frontend/src/apicalls/employeeApi.ts
import axios from 'axios';
import { Employee } from '../types/Employee';

const BASE_URL = 'http://localhost:2500/api/employees';

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const response = await axios.post(BASE_URL, employee);
  return response.data;
};

export const updateEmployee = async (id: string, employee: Employee): Promise<Employee> => {
  const response = await axios.put(`${BASE_URL}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
