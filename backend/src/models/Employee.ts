// src/models/Employee.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IEmployee extends Document {
  name: string;
  position: string;
  salary: number;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
