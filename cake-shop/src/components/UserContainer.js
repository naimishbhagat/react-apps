import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";
function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {userData.users.map((user) => {
            const { id, name, username, email, phone, website } = user;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
