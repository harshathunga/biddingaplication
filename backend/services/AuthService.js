import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import users from "../Models.js/UsersModel.js";

export const registerUser = async ({ username, email, password }) => {
  console.log("Registering user:", { username, email, password });
  try {
    const exists = await users.findAll({ where: { email } });
    console.log("this is exists",exists.length)

    if (exists.length > 0 ) {
      return { status: 400, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await users.create({
      username,
      email,
      password: hashedPassword,
    });
    return {
      status: 201,
      message: "User registered successfully",
      user: newUser,
    };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const user = await users.findOne({ where: { email } });
    if (!user) {
      return { status: 404, message: "User not found" };
    }

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return { status: 400, message: "wrong password" };
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, username: user.username },
      process.env.secret_key,
      { expiresIn: "1h" }
    );

    const { password: _, ...safeUser } = user.toJSON();

    return { status: 200, message: "Login successful", token, user: safeUser };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
};
