import { Role } from "./enum";

export interface User{
    id?:number,
    name:string,
    email:string,
    password:string,
    role: Role
}

export interface Course{
    id?: number,
    title: string,
    description: string,
    duration: string,
    createdAt: string
}

export interface Classroom{
    id?:number,
    name:string,
    location:string,
    capacity:number,
    type:string
}

export interface Assessment {
  id?: number;
  title: string;
  description: string;
  totalMarks: number;
  passMarks: number;
}

export interface Notification {
  id?: number;
  userId: number;
  message: string;
  isRead: boolean;
  createdAt: string; // ISO date string from backend
}

