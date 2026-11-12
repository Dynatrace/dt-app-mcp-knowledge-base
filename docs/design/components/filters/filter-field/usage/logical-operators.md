## Logical operators

The FilterField supports the logical operators `AND` and `OR`. If users don't specify an operator, filter statements are automatically connected by an implicit `AND`, which is the default operator.

To connect two filter statements with the `OR` operator, users must enter `OR` between them.

- Never explicitly add `AND` operators in the FilterField unless users enter them.
- Never automatically add `OR` operators in the FilterField. Users must explicitly enter them.
- Avoid automatically connecting multiple values of the same key with an `OR` operator. Use the `in ()` syntax instead.

Refer to [rules for logical operator suggestions](#rules-for-logical-operator-suggestions) for guidance on when and where to suggest logical operators in the overlay.
