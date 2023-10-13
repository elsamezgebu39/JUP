import React, { use } from "react";
import UserService, { User } from "@lib/service/userService";

const TestUserPage = async () => {
  // Here is an illustration of how the User class can be utilized.
  const userService = new UserService();

  // Get user by ID
  async function getByUserId() {
    let userIns: User = await userService.getByUserId("1");
    console.log({ userIns });
    return userIns;
  }

  //await getByUserId();

  // Create a new user Example
  async function createUser() {
    const newUser: User = {
      first_name: "Abenezer",
      last_name: "Kebede",
      user_name: "abenikeb",
      verified: 1 as any,
      email: "abike9@gmail.com",
      phone: "0913228892",
      gender: "male",
      address: "123 Main St",
      role: "user",
      rating: 0,
      password: "password123",
    };

    userService
      .createUser(newUser)
      .then((createdUser: User) => {
        console.log("Created user:", createdUser);
      })
      .catch((error: Error) => {
        console.error("Error:", error.message);
      });
  }

  //   await createUser();

  async function updatedUser() {
    // Update (password) user by ID
    const updatedUser: User = {
      first_name: "Abenezer",
      last_name: "Kebede",
      user_name: "abenikeb",
      verified: false,
      email: "abenikeb79@gmail.com",
      phone: "0913228892",
      gender: "male",
      address: "123 Main St",
      role: "user",
      rating: 0,
      password: "password567",
    };

    userService
      .updateUser("1", updatedUser)
      .then((updatedUser: User) => {
        console.log("Updated user:", updatedUser);
      })
      .catch((error: Error) => {
        console.error("Error:", error.message);
      });
  }

  // await updatedUser();

  // Delete user by ID
  async function removeUser() {
    userService
      .deleteUser("1")
      .then(() => {
        console.log("User deleted successfully");
      })
      .catch((error: Error) => {
        console.error("Error:", error.message);
      });
  }

  // await removeUser();

  return (
    <div>
      <h1>Here is an illustration of how the User class can be utilized.</h1>
    </div>
  );
};

export default TestUserPage;
