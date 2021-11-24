# Lillii RnB Freeing Returns Documetation

## Prerequisites
**Group Teams By separation concerns around what team is accomplishing. Domain expertise.**

```
[x]https://www.netguru.com/blog/react-rxjs
[x]https://www.apollographql.com/blog/apollo-client/caching/
[x]local-state-management-with-reactive-variables/
[x]https://reactjs.org/docs/react-component.html
```

> VSCode Extensions:
*
eslint, prettier, prettier eslint, simple react snippets,
TODO Highlight, Visual Studio IntelliCode
*

> Lint on Save: 
*
File > Preferences > Settings (or Ctrl+,) > Search: codeActionsOnSave > Edit in settings.json > add to json:*
```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

## Technologies

1. Auth: GCP OpenID Connect Tokens
2. Front End: React.js + Rx.js (State Management) (<embed> for embedding)
3. Back End: Node.js (express?) + Apollo Federation (API Gateway) + GraphQL (Schema)
4. DB: Redis (Stream/Caching) - Postgres -> BQ Data Lake (Concurrency/Persistence)
5. Infrastructure: Kubernetes (Orchestration) + Docker (Containers) 
6. Scheduled Events: Cron Jobs
7. Host: (Google Cloud (Container Registry) + GKE for deployment control)


### Installation
1. Clone Repository && cd fre-ui-web-master
2. Start Postgres
```bash
createdb enterprise-db
```
3. [Update Config](server-enterprise/ormconfig.json)
4. Start Redis

- Frontend
5. cd client-enterprise
6. npm install
7. npm start
8. App running on port 3000

- Backend
5. cd server-enterprise
6. npm install
7. npm run start-services
8. npm run start-gateway
9. Gateway [Query-to] running on port 5000

### Deployment
- Frontend
1. Push to Git
2. npm run build
3. Deploy to GCP App Engine

- Backend
1. Push to Git
2. Docker Build
- docker build -f ./Dockerfiles/container.dockerfile -t gcr.io/freeing-returns/container:staging .
3. Tag container as [latest] release
- docker tag 715bc70a8a10 gcr.io/freeing-returns/container:latest
4. Push to Container Registry
- docker push gcr.io/freeing-returns/container:staging
5. Deploy to k8s
- cd manifests > kubectl apply -f . > kubectl get all
6. Deploy to GKE
- 

### Example Queries & Mutations

- [Example of registering a new user](server-enterprise/src/loginContainer/modules/register/example-register.md)
- [Example of a user login](server-enterprise/src/loginContainer/modules/login/example-login.md)
- [Example of fetching a user from session](server-enterprise/src/loginContainer/modules/session/README.md)

## To do

1. Scale-out Services
2. Complete Frontend
3. Add Developers!

## License

The MIT License (MIT)
