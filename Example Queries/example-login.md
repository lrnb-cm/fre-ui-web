## Example of a user login

You must make sure your Redis service is running in the background.
Refer to [this README](./README.md) before getting started.

## Query

```graphql
mutation {
  loginProvider(provider: "google", payload: "{\"login_hint\": \"dsflkjfk@dfajvj.com\", \"scope\": \"openid profile email\", \"redirect_uri\": \"http://localhost:3000/validated\", \"prompt\": \"consent\", \"state\": \"google\"}") {
    url
    ApiKey
    email
  }
}
```

## Example response

```json
{
  "data": {
    "loginProvider": {
      "url": "https://accounts.google.com/o/oauth2/v2/auth",
      "ApiKey": "7WGx-zSan-D2RJ-1sAi",
      "email": "sdafsdf@jkdfma.com"
    }
  }
}
```

## Confirm login session

```graphql
query {
  userProvider(email: "sdafsdf@jkdfma.com") {
    ApiKey
  }
}
```

```json
{
  "data": {
    "userProvider": {
      "ApiKey": "7WGx-zSan-D2RJ-1sAi"
    }
  }
}
```

You can also check that the login session was saved by opening the dev tools > Application > Cookies > http://localhost:3000

| Name      | Value                                   | Domain    | Expires                  |
| --------- | --------------------------------------- | --------- | ------------------------ |
| qid       | s%3AIc-....Og3V73fZeYKlCA               | localhost | Session                  |
| ...       | ...                                     | ...       | ...                      |
| csrftoken | 3Z5cqG7YwS.....CYeHHOttQw2mUuuSGyutVsZt | localhost | 2022-02-08T13:32:56.860Z |
