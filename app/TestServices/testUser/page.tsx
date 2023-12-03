"use client";
import React, { use } from "react";
import UserService, { User } from "@lib/service/userService";
import {
  useAllUsers,
  useCreateUser,
  useUpdateUser,
  useDeleteUser,
} from "@lib/hooks/useUserHooks";

//* Here is an illustration of how the User class can be utilized.

//* Get user by ID
function UserList() {
  const { data: users, isLoading, isError, error } = useAllUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error as any}</div>;
  }

  return (
    <div>
      <h2>User List Table</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.user_name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

//* Create/post user Data
function CreateUserForm() {
  const createUserMutation = useCreateUser();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { elements } = event.target;
    const newUser = {
      first_name: elements.first_name.value,
      last_name: elements.last_name.value,
      user_name: elements.user_name.value,
      verified: "0",
      email: elements.email.value,
      phone: elements.phone.value,
      gender: elements.gender.value,
      address: elements.address.value,
      role: elements.role.value,
      rating: 0,
      password: elements.password.value,
    };

    createUserMutation.mutate(newUser);
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
        />
        <br />
        <input type="text" name="last_name" placeholder="Last Name" required />
        <br />
        <input type="text" name="user_name" placeholder="Username" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        {/* Other input fields for phone, gender, address, role, etc. */}
        <button type="submit" className="b-2 ">
          Create
        </button>
      </form>
      {createUserMutation.isLoading && <div>Creating user...</div>}
      {createUserMutation.isError && (
        <div>Error: {createUserMutation.error.message}</div>
      )}
      {createUserMutation.isSuccess && <div>User created successfully!</div>}
    </div>
  );
}

//* Update/delete user Data
function App() {
  const userId = "1";

  const { data: user, isLoading, isError, error } = useUpdateUser();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  const handleUpdateUser = () => {
    const updatedUser = {
      id: userId,
      //TODO: Add the desired fields
    };

    updateUserMutation.mutate(updatedUser);
  };

  const handleDeleteUser = () => {
    deleteUserMutation.mutate(userId);
  };

  if (isLoading) {
    return <div>Loading user...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {/* Display user details */}
      {user && (
        <div>
          <p>Name: {user.user_name}</p>
          <p>Email: {user.email}</p>
          {/*TODO:-------------------- */}
          <button onClick={handleUpdateUser}>Update User</button>
          <button onClick={handleDeleteUser}>Delete User</button>
        </div>
      )}
    </div>
  );
}

// export default CreateUserForm;
export default UserList;
// export default App;
// export default CreateUserForm;
