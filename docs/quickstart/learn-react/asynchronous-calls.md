## Asynchronous calls

React components don't allow using `async/await` at the top component level. To work around this, you must create an `async` function that can be called from inside `useEffect`, for instance.

### Example

In the following example, you have a `UserList` component that fetches a list of users. It does so by calling a user API in the `useEffect` hook:

```tsx skip-testing
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState();

  // highlight-start
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('/users');
      const users = await response.json();
      setUsers(users);
    };

    getUsers();
  }, []);
  // highlight-end

  return (
    <div>
      {users && (
        <ul>
          {users.map((user) => (
            <li>
              <User user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```
