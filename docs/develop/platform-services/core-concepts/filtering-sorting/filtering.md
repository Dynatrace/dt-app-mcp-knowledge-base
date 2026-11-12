## Filtering

You can use the query parameter `filter` if the API supports filtering. By default, the filter expression can reference any field in the listed resource. However, some services may restrict the fields that you can filter.

The filtered result is always a list regardless of the number of entries. If the result is empty, it's still considered a successful execution of the API with an HTTP 200 - Ok response code.

### Construct filter expression

To construct a filter expression, use a set of field-level expressions combined with boolean operators. The boolean operators supported are `or`, `and`, and `not`.

You can also use parentheses to group expressions. If you don't use parentheses, the standard boolean operator precedence is applied, with `and` taking precedence over `or`.

The general form of the field-level expression is `<Fieldname> <Operator> <Value>`. Let's understand them:

- `<Fieldname>` is the field name you want to filter.
- `<Operator>` is an operator that specifies how the field should be in comparison to the specified value.
- `<Value>` is the value against which the field is compared. Depending on the filtered field type, the value can be a string, date/time, number, or boolean.

### Datatypes and operators

Following is the list of data types supported in the filter expression along with the operators:

| Datatype                                 | Supported operators                                     | Representation                                                                                                                                                                                                                                                                                                        |
| :--------------------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| number (short, int, long, float, double) | `=`, `!=`, `<` , `<=`, `>`, `>=`, `in`                  | - Integers: decimal and hexadecimal (with leading&#x20;
  `0x`
  )&#x20;
- Floating Point: scientific notation with optional exponent&#x20;
  `e`
   or&#x20;
  `E`
  &#x20;                                                                                                                                          |
| String                                   | `=`, `!=`, `contains`, `starts-with`, `ends-with`, `in` | *  Single quotes only: 'Hello World!'&#x20;
* Special characters (for example, the quotes) are preceded with&#x20;
  `\`
* exact operators&#x20;
  `=`
   and&#x20;
  `!=`
   are case sensitive
* inexact operators&#x20;
  `contains`
  ,&#x20;
  `starts-with`
  , and&#x20;
  `ends-with`
   are case insensitive |
| Boolean                                  | `=`, `!=`                                               | Comparison with constants `true` or `false` only                                                                                                                                                                                                                                                                      |
| Date/Time                                | `=`, `!=`, `<` , `<=`, `>`, `>=`, `in`                  | As ISO 8601 compliant string in one of the following formats:* `yyyy-MM-ddThh:mm:ss[+/-]hh:mm`
   (e.g.&#x20;
  `2007-12-03T10:15:30+01:00`
  )
* `yyyy-MM-ddThh:mm:ss`
   (e.g.&#x20;
  `2007-12-03T10:15:30`
  )
* `yyyy-MM-dd`
   (e.g.&#x20;
  `2007-12-03`
  )
* `hh:mm:ss`
   (e.g.&#x20;
  `10:15:30`
  )      |
| Array                                    | `contains`, `is-empty`                                  | - `contains`
  : Comparison with elements contained in the array, for example, 'Hello World!' for an array of strings.
- `is-empty`
  : Check if array is empty.                                                                                                                                                      |

#### The 'in' operator

You can use it to compare for equality within a constant list of possible values, which is provided by the `in` operator.

Assuming `name` being of datatype String, instead of writing

```text
name = '123' or name = '456' or name = '789'
```

you can write

```text
name in('123','456','789')
```

The operator is supported for all datatypes except for booleans. You can only use the list constant on the right side of the `in` operator; you can't use it like a field of datatype `list`.

Thus, this expression is invalid:

```text
('123','456','789') contains ‘123’
```

### Examples

```text
GET /clients?filter=age=30
GET /clients?filter=firstName='Konrad' and lastName='Zuse'
GET /documents?filter=owner='user1' and lastModified>='2022-02-06T11:00:00Z'
GET /tenants?filter=tenantUuid starts-with 'abc' and not(deleted=false or active=true)
GET /caches?filter=cacheHitRate<90.5
GET /locations?filter=distance>=1.0E4
GET /apps?filter=resourceStatus.subResourceTypes contains 'FUNCTIONS'
```
