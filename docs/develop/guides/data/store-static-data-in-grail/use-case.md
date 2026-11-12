## Use case

Imagine a scenario where you're storing user event information in Grail. This data includes the user's email, current balance, and the currency of the balance. You want to convert the balance into a different currency using conversion rates fetched from a third-party API. By storing the user event data and the conversion rates in Grail, you can perform this conversion and generate balances in the desired currency directly within Grail.

### User event data structure

Here is an example of the user event data stored in Grail:

```json
[
  {
    "email": "first@first.com",
    "balance": 10,
    "currency": "USD"
  },
  {
    "email": "second@first.com",
    "balance": 130,
    "currency": "USD"
  },
  {
    "email": "third@first.com",
    "balance": 20,
    "currency": "USD"
  }
]
```

### Conversion rate data

The conversion rates, fetched from a third-party API, are stored in Grail as follows:

```json
[
  { "source": "USD", "EUR": 0.88, "AUD": 1.39, "PLN": 3.94 },
  { "source": "EUR", "USD": 1.14, "AUD": 0.72, "PLN": 0.25 }
]
```

You can calculate each user's balance in a specific currency using these two datasets. For example, you can convert USD balances into EUR using the stored conversion rates.
