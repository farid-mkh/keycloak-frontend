# Keycloak authentication

### This application includes:

|  |  |env|
|---|---|---|
|keycloak | authentication| docker |
|postgres | database| docker | 
|vuejs    | frontend framework|local|


1. How to run keycloak and postgres

```bash
docker-compose up
```

2. How to run vue app

```bash
cd keycloak-client
yarn
yarn dev
```

3. How to run start using keycloak

    1. open `http://localhost:8080/` in your browser
    2. login with username `admin` and password `admin`
    3. then open `Administration Console`
    4. create new realm name it `test-realm`
    5. create new client `test-client`
    6. create new user and create credential for that user
    7. that's it. Now open frontend app and it will redirect to login page, if you're logged-in then it will redirect to frontend app