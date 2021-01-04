import React from "react";
function Home({ user }) {
  if (user) {
    return (
      <h2>
        Hi {user.first_name} {user.last_name}
      </h2>
    );
  }
  return (
    <div>
      <h2>You are not loggedin</h2>
    </div>
  );
}

export default Home;
