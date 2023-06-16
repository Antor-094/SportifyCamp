// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://summer-camp-learning-school-server-olive.vercel.app/users");
    return res.json();
  });
  //   const handleDelete = (() = {});
  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-learning-school-server-olive.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`https://summer-camp-learning-school-server-olive.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>SoprtifyCamp | ManageUsers</title>
      </Helmet>
      <h1 className="Text-3xl font-semibold">Total users : {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    src={user?.photo}
                    alt="user"
                    className="h-16 w-16 object-cover"
                  />
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className={
                      user.role === "admin"
                        ? "btn btn-ghost btn-disabled"
                        : "btn btn-ghost bg-[#65799b]  text-white"
                    }
                  >
                    Make <br />
                    admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    className={
                      user.role === "instructor"
                        ? "btn btn-ghost btn-disabled"
                        : "btn btn-ghost bg-[#65799b] text-white"
                    }
                  >
                    Make <br />
                    Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
