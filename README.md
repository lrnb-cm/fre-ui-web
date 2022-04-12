# Lillii RnB Freeing Returns Documetation

## Prerequisites

**Group Teams By separation concerns around what team is accomplishing. Domain expertise.**

- [React + Rx.js](https://www.netguru.com/blog/react-rxjs)
- [React-Hooks](https://reactjs.org/docs/react-component.html)

> VSCode Extensions:

_eslint, prettier, prettier eslint, simple react snippets,
TODO Highlight, Visual Studio IntelliCode_

> Lint on Save:

_File > Preferences > Settings (or Ctrl+,) > Search: codeActionsOnSave > Edit in settings.json > add to json:_

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "typescript", "typescriptreact"]
```

## Technologies

1. Auth: GCP OpenID Connect Tokens
2. Front End: React.js + Rx.js (State Management) (`<embed>` for embedding)
3. Scheduled Events: Cron Jobs
4. Host: (Google Cloud App Engine)

### Installation

1. `git clone https://github.com/lrnb-cm/fre-ui-web.git && cd fre-ui-web`
2. `npm install`
3. `npm start`
4. App running on port 3000

### Deployment

> Frontend

1. Push to Git
2. npm run build
3. Deploy to Favorite Cloud Provider!

## To do

1. Add Developers
2. Complete Frontend

# User table

uid - PK - unique
email - unique
first_name
last_name
avatar
date_created - default current date
date_signed_in
ip_signed_in
date_modified

# Users_groups table

user_id
group_id

# Groups table

id - PK
name
