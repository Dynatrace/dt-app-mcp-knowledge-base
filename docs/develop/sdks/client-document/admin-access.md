## Admin Access

Regular users can only access documents *owned by them* or *shared with them*.

Users with the permission `document:documents:admin` can act with elevated permission - they can access all users' documents of the current environment, regardless of ownership.

The admin-access can be enabled on a per-request basis, by setting the optional request parameter `admin-access` to `true.`
