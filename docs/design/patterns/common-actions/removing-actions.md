## Removing actions

Removing actions let the user delete, remove, or clear something from a resource, file, input field, or app, for example.

### Delete

This action temporarily or permanently eliminates an item from the system. For example, deleting a launchpad or a segment.

- Icon—`DeleteIcon`
- Label—**Delete**
- Opposite action—[New](#new-or-create)
- Related action—[Remove](#remove-and-clear), [Clear](#remove-and-clear)

In the table below, words in brackets are examples. Replace them with the item to be deleted.

|  Do                 |  Don't              |
| ------------------- | ------------------- |
|                     |  Move to trash      |
|  Delete             |  Delete forever     |
|  Delete permanently |  Remove [guardian] |
|  Delete [guardian] |                     |

**When working with documents**, use:

- **Delete** for deleting a whole document. Don't use the item name.
- **Delete permanently** for permanently deleting a whole document in the Deleted tab.
- **Delete [item]** for deleting part of the document, such as a notebook section or a dashboard tile → Delete tile, Delete section, Delete task.

> **Note**
>
> To add friction and prevent accidental deletions, we recommend using a [confirmation modal](https://developer.dynatrace.com/design/components/overlays/Modal/usage/#confirmation-modals) with the delete action.

### Remove and Clear

**Remove** breaks the relationship between items, while **Clear** erases information quickly. The impact of eliminating these items is low and they can easily be added back. For example, removing a tag or clearing a filter.

- Icon—`XmarkIcon`, `MinusIcon`
- Label—**Remove** or **Clear**
- Opposite action—[Add](#add)
- Related action—[Delete](#delete)

Often, this action can be understood with an icon alone, for example, if it’s next to a tag. In the table below, the words in brackets are examples. Replace them with the item to be removed or cleared.

|  Do               |  Don't  |
| ----------------- | ------- |
|                   |  Delete |
|                   |         |
|  Remove           |         |
|  Remove [tag]    |         |
|  Remove all       |         |
|  Clear            |         |
|  Clear [filters] |         |
|  Clear all        |         |

> **Note**
>
> Clearing or removing added items tends to be quick and low-impact, so you don’t need a confirmation modal in this case.
