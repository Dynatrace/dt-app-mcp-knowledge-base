## Inserting actions

These actions let users create **new** parent items and then **add** child items to the parent items.

### New (or Create)

This action lets a user create something new, for example, a new guardian, workflow, or notebook.

- Icon—`PlusIcon`
- Label—**New** (preferred) or **Create**
- Opposite action—[Delete](#delete)
- Related action—[Add](#add)

Always include **New** (or **Create**) in the label. The verb makes the action clear without relying on the icon alone. In the table below, the words in brackets are examples. Replace them with the item to be created.

|  Do                 |  Don't                  |
| ------------------- | ----------------------- |
|                     |  Create new             |
|  New                |  Create new [workflow] |
|  New [workflow]    |  Add                    |
| New                 |  Add new                |
| New [workflow]     |  Add new [workflow]    |
|  Create             |  [Workflow]            |
|  Create [workflow] |                         |

For [configuration modals](https://developer.dynatrace.com/design/components/overlays/Modal/usage/), it's best to use **Create** as the button label:

![Configuration modals light](https://developer.dynatrace.com/assets/images/common-actions-configuration-modals-light-29dd372f1b55a665ad75b33e43597487.webp)

### Add

This action lets a user add child items. For example, adding a section to a notebook, a task to a workflow, or tags to a guardian.

- Icon—`PlusIcon`
- Label—**Add**
- Opposite action—[Remove](#remove-and-clear), [Clear](#remove-and-clear)
- Related action—[New](#new-or-create)

If there is a label, it must include the word **Add**. In the table below, words in brackets are examples. Replace them with the item to be added.

|  Do          |  Don't              |
| ------------ | ------------------- |
|              |  Create             |
|  Add         |  Create new         |
|  Add [task] |  Create new [task] |
|              |  New                |
|              |  New [task]        |
|              |  Add new            |
|              |  Add new [task]    |
|              |  [Task]            |

### New vs Add

**New** comes first, then **Add**, because a workflow, notebook, guardian, etc., must exist before anything can be added to it.

![New vs Add light](https://developer.dynatrace.com/assets/images/common-actions-new-vs-add-light-ad0c9b5971a41e30bc9702e3eb61abc7.webp)

|                      | New (or Create)                                                                                                                                                                         | Add                                                                                                            |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Definition**       | Creates a new item                                                                                                                                                                      | Adds a property to a previously created item.                                                                  |
| **Example**          | A new guardian, workflow, or notebook                                                                                                                                                   | An objective, tag, variable, or task                                                                           |
| **Hierarchy level**  | Top-level                                                                                                                                                                               | Child-level                                                                                                    |
| **User perception**  | User creates something new                                                                                                                                                              | User adds to something existing                                                                                |
| **Opposite action**  | Delete, Delete permanently                                                                                                                                                              | Remove, Clear                                                                                                  |
| **Visual treatment** | Primary call-to-action, high-emphasis. Appears at the top-right of a list view or in an empty state. It sits higher in the visual hierarchy when New and Add appear on the same screen. | Secondary action. Carries less visual weight than New, reflecting that it's a lighter, more reversible action. |
| **Icon**             | `PlusIcon`                                                                                                                                                                              | `PlusIcon`                                                                                                     |
| **Label**            | New (preferred) or Create                                                                                                                                                               | Add                                                                                                            |
