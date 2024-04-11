import { Request, Response } from "express";
import { User } from "../interfaces/users.interface";
import { findAllUsers, createUser } from "../services/users.service";
import httpStatus from "http-status";
import { CreateUserDto } from "../dtos/users.dto";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userData: User[] = await findAllUsers();

    res.status(httpStatus.OK).json({ data: userData, message: "findAll" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData: CreateUserDto = req.body;
    const createUserData: User = await createUser(userData);

    res.status(201).json({ data: createUserData, message: "created" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};
