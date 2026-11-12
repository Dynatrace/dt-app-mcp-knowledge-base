### Best practices for third-party dependency security

A few practices substantially lower the likelihood of something going wrong with your dependencies in terms of security.

- **Keep the list of dependencies small:** Even though there might be a library for the function you're about to implement, you should be sure you need it. Every single dependency you pull in increases the attack surface on your app. A few negative examples are the use of libraries like `leftpad`, `trim`, and `is-even`, even though these are simple functions.
- **Choose your libraries wisely:** If the library has only one contributor, and the last commit happened years ago, likely, it won't be well maintained in the future. So chances are high that security bugs don't get fixed and that the library is prone to repository hijacking. Look for libraries with many contributors, frequent updates, security documentation, and a solid security track record.
- **Update regularly, even in the absence of known vulnerabilities:** The longer you wait for a major version upgrade of your library, the harder it will get. Make sure to pay down such technical debts regularly by frequent library updates, even though there is no urgent need. It will decrease the likelihood of severe vulnerabilities in your dependencies.
- **Regularly scan your dependencies for known vulnerabilities:** Even if you update often, new known vulnerabilities might still pop up from time to time in the versions you use. Regularly scan your libraries for any known security problems and act accordingly.
