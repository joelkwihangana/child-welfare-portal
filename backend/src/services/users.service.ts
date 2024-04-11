import httpStatus from "http-status";
import { CreateUserDto } from "../dtos/users.dto";
import { HttpException } from "../exceptions/HttpException";
import { User } from "../interfaces/users.interface";
import userModel from "../models/users.model";
import { isEmpty } from "../utils/util";

export const findAllUsers = async (): Promise<User[]> => {
  const users: User[] = await userModel.find({});
  return users;
};

export const createUser = async (userData: CreateUserDto): Promise<User> => {
  if (isEmpty(userData))
    throw new HttpException(httpStatus.BAD_REQUEST, "userData is empty");

  const findUser: User = await userModel.findOne({ email: userData.email });
  if (findUser)
    throw new HttpException(
      httpStatus.BAD_REQUEST,
      `This email ${userData.email} already exists`
    );

  const createUserData: User = await userModel.create(userData);

  return createUserData;
};
