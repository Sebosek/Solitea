import {useEffect, useState} from "react";
import {User} from "./types/User";



interface UsersProps {
  users: Array<User>;
}

const Users = ({ users }: UsersProps) => (
  <>
    {users && (
      <table>
        <thead>
        <tr>
          <th>Full name</th>
          <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {users.map(({id, firstName, lastName, address}) => (
          <tr key={id}>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{`${address?.city}`}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )}
  </>
);

export default Users;