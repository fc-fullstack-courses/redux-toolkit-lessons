import React, { useState } from 'react';

function UserList(props) {
  const [users] = useState([]);
  const [isLoading] = useState(false);
  const [error] = useState(null);

  return (
    <section>
      {isLoading && <div>Loading</div>}
      {error && <div>Error</div>}
      {users.length > 0 &&
        users.map((u) => <article key={u.id}>{JSON.stringify(u)}</article>)}
    </section>
  );
}

export default UserList;
