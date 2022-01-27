## Example of registering a new user

## GetScores

```graphql
query {
  getScores(apiKey:"erjgerwnk90jq35g") {
    approval
    fraudscore
    id
    message
    status
    uniqueid
  }
}
```

## Response 

```json
{
  "data": {
    "getScores": [
      {
        "approval": "Pending",
        "fraudscore": 0,
        "id": "frtetbetb",
        "message": "Trasaction is pending.",
        "status": 100,
        "uniqueid": "erjgerwnk90jq35g"
      },
      {
        "approval": "Pending",
        "fraudscore": 0,
        "id": "1Os5f000000cn6ICAQ",
        "message": "Trasaction is pending.",
        "status": 100,
        "uniqueid": "erjgerwnk90jq35g"
      },
      {
        "approval": "Pending",
        "fraudscore": 0,
        "id": "1Os5f000000l4vuCAA",
        "message": "Trasaction is pending.",
        "status": 100,
        "uniqueid": "erjgerwnk90jq35g"
      }
    ]
  }
}
```

## PostTransaction

```graphql
mutation {
  postTransaction(apiKey: "erjgerwnk90jq35g", payload: [
    {
    	uniqueid:"erjgerwnk90jq35g"
      orderid: "frtetbetb"
      transactionType: return
      creditcardnumber:1234567891234567
      dateofsale: 1519211809934
      timeofsale: 1519211809934
      cardexpirydate: "08/28"
      currency: "usd"
      ordertotal: 10000
      paymentmode: "return"
      billfirst: "first"
      billlast: "last"
      billemail: "email@email.com"
      billphone: "1234567890"
      billaddress1:"123 address ave"
      billaddress2:"456 address ave"
      billcity: "thiscity"
      billstate: "ca"
    }
  ]) 
}
```

#### Returns

```json (
  {
    "data": {
      "postTransaction": true
    }
  }
)
```