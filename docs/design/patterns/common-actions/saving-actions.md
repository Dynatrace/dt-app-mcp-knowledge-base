## Saving actions

These actions let users save their work or download it to a local system.

### Save

**Save** stores the data from a document or configuration so it isn't lost. For example, saving changes made in a document.

- Icon—`SaveIcon`
- Label—**Save**
- Opposite action—[Delete](#delete)
- Related actions—[Edit](#edit), [Rename](#rename)

|  Do           |  Don't  |
| :------------ | :------ |
|               |  Store  |
|  Save         |  Sync   |
|  Save changes |  Update |
| Save          |         |
| Save changes  |         |

**When working with documents**, use:

- **Save** for saving a whole document. Don't use the item name.
- **Save [item]** for saving part of the document, such as a dashboard tile → Edit tile.

> **Note**
>
> Use a [confirmation modal](https://developer.dynatrace.com/design/components/overlays/Modal/usage/#confirmation-modals) to confirm whether users want to exit without saving.

### Download

This action transfers a document, or part of a document, from a remote system to a local system.

- Icon—`DownloadIcon`
- Label—**Download**
- Related actions—[Save](#save), [Share](#share)

The words in brackets in the table below are examples. Replace them with the item to be downloaded.

|  Do                           |  Don't             |
| :---------------------------- | :----------------- |
|                               |  Export            |
|  Download                     |  Export [results] |
|  Download [results]          |                    |
|  Download [results] [(CSV)] |                    |
| Download                      |                    |
| Download [results]           |                    |
| Download [results] [(CSV)]  |                    |

**When working with documents**, use:

- **Download** for downloading a whole document. Don't use the item name.
- **Download [item]** for downloading part of a document in a different format. For example, downloading results as CSV → Download results or Download results (CSV), if you want to specify the format.
