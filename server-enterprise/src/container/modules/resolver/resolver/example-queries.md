## Example of registering a new user

## Create

```graphql
mutation {
  create(
    payload: {
      title: "Tester"
      email: "im@jurassic-park.com"
      description: "this is an apt description lorum ipsum"
    }
  ) {
    title
    email
    description
  }
}
```

## Example response

```json
{
  "data": {
    "create": {
      "id": "5",
      "title": "Tester",
      "email": "im@jurassic-park.com",
      "description": "this is an apt description lorum ipsum"
    }
  }
}

You can confirm this in the log that looks like below:

```bash
query: START TRANSACTION
query: INSERT INTO "model"("id", "title", "email", "description") VALUES ($1, $2, $3, $4) RETURNING "id" -- PARAMETERS: ["Tester","im@jurassic-park.com", "this is an apt description lorum ipsum"]
query: COMMIT
```

## Read
```graphql
query {
  get{
    id,
    title,
    email,
    description
  }
}
```

## ReadbyID
```graphql
query {
  getById(id){
    id,
    title,
    email,
    description
  }
}
```

## Update
```graphql
mutation {
  update(
    payload: {
        id: 1
        title: "new Title", 
        email: "new@email.com", 
        description: "new lorum ipsum"
    }
  )
}
```

## Delete
```graphql
mutation {
  delete(id: 1)
}
```
