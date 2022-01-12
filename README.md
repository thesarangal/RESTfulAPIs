# RESTfulAPIs

Learning Practices for RESTful APIs in NodeJS

REST APIs provide a flexible, lightweight way to integrate applications, and have emerged as the most common method for connecting components in micro services architectures.

## API

An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other.

### REST API

A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.

#### Principles

The only requirement is that they align to the following six REST design principles - also known as architectural constraints:

##### Uniform interface

All API requests for the same resource should look the same, no matter where the request comes from. The REST API should ensure that the same piece of data, such as the name or email address of a user, belongs to only one uniform resource identifier (URI). Resources shouldn’t be too large but should contain every piece of information that the client might need.

##### Client-server decoupling

In REST API design, client and server applications must be completely independent of each other. The only information the client application should know is the URI of the requested resource; it can't interact with the server application in any other ways. Similarly, a server application shouldn't modify the client application other than passing it to the requested data via HTTP.

##### Statelessness

REST APIs are stateless, meaning that each request needs to include all the information necessary for processing it. In other words, REST APIs do not require any server-side sessions. Server applications aren’t allowed to store any data related to a client request.

##### Cacheability

When possible, resources should be cacheable on the client or server side. Server responses also need to contain information about whether caching is allowed for the delivered resource. The goal is to improve performance on the client side, while increasing scalability on the server side.

##### Layered system architecture

In REST APIs, the calls and responses go through different layers. As a rule of thumb, don’t assume that the client and server applications connect directly to each other. There may be a number of different intermediaries in the communication loop. REST APIs need to be designed so that neither the client nor the server can tell whether it communicates with the end application or an intermediary.

##### Code on demand (optional)

REST APIs usually send static resources, but in certain cases, responses can also contain executable code (such as Java applets). In these cases, the code should only run on-demand.

### Implementation

#### 1. Step Project

##### A. Initialization

```code
npm init -y
```

##### B. Install Modules

- Express

```code
npm install express
```

- ESM Adopt ES6 Import Structure

```code
npm i esm
```

After using ESM, following syntax

```code
const express = require('express')
```

will be written as

```code
import express from 'express'
```

- Nodemon - For Development Only

```code
npm i nodemon -D
```

- dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

```code
npm i dotenv
```

- joi
The most powerful schema description language and data validator for JavaScript.

```code
npm i joi
```

###### P4RM's ODM

Object Document Mapper is built for NodeJS and provides transparent persistence for JavaScript objects to MongoDB database.

- mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 

It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

```code
npm i mongoose
```

- bcrypt
A library to help you hash passwords. This module contains an implementation of the bcrypt password hashing algorithm and nothing else.

```code
npm i bcrypt
```

Alternative: cryptojs

Use bcrypt where you want to do slow and computationally expensive hashing -- this will generally be for hashes where you really don't want an attacker to be able to reverse the hash, e.g. user passwords. Use native crypto for everything else.

- jsonwebtoken
A library to help you hash passwords.

```code
npm i jsonwebtoken
```

#### 2. .ENV setup

Object destruction of .ENV with /config/index.js

#### 3. Make ROUTES for Requests

Directory 'routes/index.js'

#### 4. Make Controllers

Directory 'controllers/index.js'

#### 5. Make Middlewares

To handle Errors and Authentication Services.

### APIs Developed

Main route ('/api')

- [+] Register a user. (End Point: '/register'; Controller: 'controllers/auth/registerControllers.js')
- [+] Login a user. (End Point: '/login'; Controller: 'controllers/auth/loginControllers.js')
- [+] Get own profile. (End Point: '/me'; Controller: 'controllers/auth/userControllers.js')
- [+] Refresh the token.
- [] Logout the user.
- [] Add new product.
- [] Update a product.
- [] Get all products.
- [] Get a single product.
- [] Delete a product.

Note: [+] means developed, [] means not developed yet.


##### References

- <https://www.ibm.com/in-en/cloud/learn/rest-apis>
