## Copying actions

Copying actions let users duplicate, copy, and paste items. Please note the differences between **Duplicate** and **Copy**.

### Duplicate

This action creates a copy of an existing document, for example, duplicating a notebook or a workflow.

- Icon—`DuplicateIcon`
- Label—**Duplicate**
- Related actions—[New](#new-or-create), [Copy](#copy)

In the table below, words in brackets are examples. Replace them with the item to be duplicated.

|  Do                    |  Don't                      |
| ---------------------- | --------------------------- |
|                        |  Make a copy                |
|  Duplicate             |  Make a copy of [notebook] |
|  Duplicate [notebook] |  Clone [notebook]          |
| Duplicate              |  Copy                       |
| Duplicate [notebook]  |  Copy [notebook]           |

**When working with documents**, use:

- **Duplicate** for duplicating a whole document. Don't use the item name.
- **Duplicate [item]** for duplicating part of a document, such as a notebook section → Duplicate section.

### Copy

This action temporarily copies something to the user's clipboard so it can be pasted elsewhere. For example, copying a link, text, generated token, or specific data from a table.

- Icon—`CopyIcon`
- Label—**Copy**
- Opposite action—[Paste](#paste)
- Related action—[Duplicate](#duplicate)

In some instances, the copy action is understood with an icon alone because of the context, such as next to a password or a token. In the table below, words in brackets are examples. Replace them with the item to be copied.

|  Do           |  Don't       |
| ------------- | ------------ |
|               |  Duplicate   |
|  Copy         |  Make a copy |
|  Copy [link] |              |
| Copy          |              |
| Copy [link]  |              |

> **Tip**
>
> Add a tooltip to show that the data was copied. Use "Copied" as the tooltip text—no period or exclamation mark.

**When working with documents**, use:

- **Duplicate** to create an exact copy of a whole document.
- **Copy [item]** for copying (before pasting) part of a document, such as a dashboard tile → Copy tile.

### Paste

This action instantly inserts something that was previously copied. For example, pasting a copied link, text, generated token, or specific data from a table.

- Icon—`PasteIcon`
- Label—Paste
- Opposite action—[Copy](#copy)
- Related action—[Duplicate](#duplicate)

Paste is usually understood without any visual cue, as users typically use a shortcut, especially if it is in context, such as an input field. Words in brackets are just examples.

|  Do    |  Don't               |
| :----- | :------------------- |
|        | Insert               |
|  Paste | Paste copied [link] |
| Paste  |                      |
