## Choose the right mechanism

| Scenario                                                       | Use                | Why                                                                 |
| -------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------- |
| User clicks a host entity and should open in the relevant app  | Recommended intent | Resolve the target app dynamically, do not hardcode the destination |
| App needs to support a resource type it cannot predict upfront | **Open with...**   | Let the platform's matching find the right targets                  |
| User wants to create an alert from a dashboard query           | Add-on             | User should stay in the dashboard, not navigate away                |
