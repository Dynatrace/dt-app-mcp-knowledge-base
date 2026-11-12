### ResourceContext

The resource context, which contains additional permission information about the object.

| Name                     | Type                                  | Description                                                   |
| ------------------------ | ------------------------------------- | ------------------------------------------------------------- |
| modifications (required) | [Modification](#modification)         | The additional modification details for this settings object. |
| operations (required)    | Array\<"delete" \| "read" \| "write"> | The allowed operations on this settings object.               |
