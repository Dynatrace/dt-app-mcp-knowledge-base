If your app allows the user to save user-generated data that needs to be available across multiple user sessions, our document service is your best option. One example of such user-defined data is to-do items that the user enters in a Todo app.
This guide explains how you can store, update, and delete data from the document service.

In the following examples, you'll see two code snippets for each type of operation.

- The **React hook** version uses the [`@dynatrace-sdk/react-hooks`](https://developer.dynatrace.com/contents/docs/develop/sdks/react-hooks/index.md/) package for all the operations. You can use this in your React frontend code.
- The **Client SDK** version uses the [`@dynatrace-sdk/client-document`](https://developer.dynatrace.com/contents/docs/develop/sdks/client-document/index.md/)) package for all the operations. The example code shown uses this package in an app function. You can use the same code in **Notebook**, **Dashboard**, and **Workflow** as well.
