import { Role } from "./enum";

export interface User{
    id?:number,
    name:string,
    email:string,
    password:string,
    role: Role
}