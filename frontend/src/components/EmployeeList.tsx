// frontend/src/components/EmployeeList.tsx
import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Employee } from '../types/Employee';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../apicalls/employeeApi';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Employee>({ _id: '', name: '', position: '', salary: 0 });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleCreateOrUpdate = async () => {
    if (isEdit) {
      await updateEmployee(newEmployee._id, newEmployee);
    } else {
      await createEmployee(newEmployee);
    }
    setNewEmployee({ _id: '', name: '', position: '', salary: 0 });
    setIsEdit(false);
    fetchEmployees();
  };

  const handleEdit = (employee: Employee) => {
    setNewEmployee(employee);
    setIsEdit(true);
  };

  const handleDelete = async (id: string) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <center>
    <div>
      <Typography variant="h5">Employee List</Typography><br />
     
      <TextField
        label="Name"
        name="name"
        value={newEmployee.name}
        onChange={handleInputChange}
      /><br /><br />
      <TextField
        label="Position"
        name="position"
        value={newEmployee.position}
        onChange={handleInputChange}
      /><br /><br />
      {newEmployee.salary !== undefined && (
  <TextField
    label="Salary"
    name="salary"
    type="number"
    value={newEmployee.salary}
    onChange={handleInputChange}
  />
)}<br /><br />
      <Button onClick={handleCreateOrUpdate}>{isEdit ? 'Update' : 'Create'}</Button><br /><br />
      <h2>ALL Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position} - {employee.salary}
            <Button onClick={() => handleEdit(employee)}>Edit</Button>
            <Button onClick={() => handleDelete(employee._id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
    </center>
  );
};

export default EmployeeList;
