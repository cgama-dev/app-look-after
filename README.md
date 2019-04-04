## Index

- [Index](#index)
- [About](#about)
  - [Links](#links)
- [Technology](#technology)
  - [Installation](#installation)
- [Running the backend](#running-the-backend)
- [Running the frontend](#running-the-frontend)


## About


The After Look Project conducts the diaper management, as well as its sale, 
analyzes the time to finish diaper stock based on model and size.

### Links

1. **Project:**

    http://lookafter.cgamadev.com.br/

## Technology

Here is a brief overview of our technology stack::

- **[Backend]**
- **[Docker](https://docs.docker.com)** and **[Docker Compose](https://docs.docker.com/compose/)** Tool used to create our development and test environments in aws.
- **[CouchDB](http://couchdb.apache.org/)** how to store our data.
- **[Express](https://github.com/expressjs/express)**  tool to build web server with nodejs.

- **[Frontend]**
- **[React](https://reactjs.org/)** Library used to control the application interface
- **[Redux-Saga](https://redux-saga.js.org/)** To control asynchronous operations
- **[Reduxsauce](https://github.com/infinitered/reduxsauce)** Provides a few tools for working with Redux-based codebases.
- **[Semanti-ui-react](https://react.semantic-ui.com/)** Library used to build the application layout

### Installation

If you've never developed this app before:

1. **Clone the repository with SSH:**
    
    ```sh
    $ git@github.com:cgama-dev/app-look-after.git
    ```
2. **Clone the repository with HTTPS:**
    
    ```sh
    $ https://github.com/cgama-dev/app-look-after.git
    ```

## Running the backend

To run the server, you will have to install couchdb database

1. **Install the database:**
   
    - **[Install CouchDB](https://docs.couchdb.org/en/stable/install/unix.html?highlight=install)**
     
2. **Install project dependency:**
   
    ```sh
    $ cd api-look-after && yarn
    ```
        ou

    ```sh
    $ cd api-look-after && npm install
    ```

4. **Configure the .env.local file with your database credentials:**    
 
   ```sh
      ex: 
        COUCHDB_NAME=namedb
        COUCHDB_USERNAME=admin
        COUCHDB_PASSWD=couchdb
    ```

5. **Then finally run the server with development:**    
    ```sh
    $ yarn start
    ```

6. **The application is running by default on port 4010**

    ```sh
    $ http://localhost:4010
    ```

## Running the frontend

2. **Install project dependency:**
   
    ```sh
    $ cd client-look-after && yarn
    ```
        ou

    ```sh
    $ cd client-look-after && npm install
    ```

3. **Configure conection with api edit file:**    

    ```sh
    $ vim client-look-after/src/service/index.js
    ```

4. **Then finally run the client with**
     
    ```sh
    $ yarn start
    ```
5. **Default loading in port 3000**

    ```sh
    $ http://localhost:3000
    ```
