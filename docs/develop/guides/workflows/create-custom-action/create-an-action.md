## Create an action

A custom action is part of a Dynatrace app. To create an action, run the following command in the root directory of your app within the terminal:

```bash
npx dt-app action create greeter
```

The command will generate an action named **greeter** in the `/actions` directory with some default files and register the action in the app config. When you run `dt-app deploy`, it will detect the action on the filesystem and deploy it as part of the whole app artifact, regardless of whether the action is registered in the app config.

> If you develop an app that only consists of actions and doesn't provide a UI,
> consider hiding your app in the launcher by setting `app.hidden` to `true`
> in your `app.config.json`.

### Update Jest config

The earlier command also generates Jest files to test your action. If you use Jest for testing your Dynatrace app, you can update your `jest.config.js` file in the root directory as follows:

```ts title="jest.config.js" skip-testing
module.exports = {
  projects: ['<rootDir>/actions/jest.action.config.js', '<rootDir>/actions/jest.widget.config.js'],
};
```

### Run the action in a workflow

Now that you have updated the app configuration and have all the files, you can deploy the app to run it in a workflow using the following command in the terminal:

```bash
npx dt-app deploy
```

After deployment, do the following:

- Open Workflows and create a new workflow.
- Then, add a task and select the **Greeter** task from the list.
- Save the workflow and run it.

By running a workflow, you'll end up in the execution monitor. Within there, you can see not only execution details but also the input sent to your action and the result produced by your action. This information is in the respective `Detail`, `Input`, and `Result` tabs. You can find the logs in the dedicated log section at the bottom of the page.

> **Note**
>
> To find the details about building and monitoring workflows, visit [Introduction to workflows](https://dt-url.net/workflows-documentation)

| Input Tab                                                                                                                   | Result Tab                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![greeter_input_tab](https://developer.dynatrace.com/assets/images/action_input_tab-edf5aad4babf1cf6a20cb5a0d8d265a8.png) | ![greeter_result_tab](https://developer.dynatrace.com/assets/images/action_result_tab-4dee3c0887ef43544f974087726e3ceb.png) |

Congratulations. You ran a task successfully with your custom action.
