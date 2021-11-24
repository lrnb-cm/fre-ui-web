# Lillii RnB Freeing Returns Documetation

## Prerequisites
**Group Teams By separation concerns around what team is accomplishing. Domain expertise.**

- [React + Rx.js](https://www.netguru.com/blog/react-rxjs)
- [React-Hooks](https://reactjs.org/docs/react-component.html)

> VSCode Extensions:

*eslint, prettier, prettier eslint, simple react snippets,
TODO Highlight, Visual Studio IntelliCode*

> Lint on Save:

*File > Preferences > Settings (or Ctrl+,) > Search: codeActionsOnSave > Edit in settings.json > add to json:*
```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

## Technologies

1. Auth: GCP OpenID Connect Tokens
2. Front End: React.js + Rx.js (State Management) (<embed> for embedding)
3. Scheduled Events: Cron Jobs
4. Host: (Google Cloud App Engine)


### Installation
1. Clone Repository && cd fre-ui-web-master
2. cd client-enterprise
3. npm install
4. npm start
5. App running on port 3000

### Deployment
> Frontend
1. Push to Git
2. npm run build
3. Deploy to GCP App Engine

## To do

1. Complete Frontend
2. Add Developers!

## License

The MIT License (MIT)
