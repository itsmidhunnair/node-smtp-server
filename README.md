## Simple SMTP Server built in Node.js

- Step 1 - Clone the code
  ```
  git clone git@github.com:itsmidhunnair/node-smtp-server.git
  ```

- Step 2 - Install Node Modules
  ```
  npm i
  ```

- Step 3 - Start the server
  ```
  node server.js
  ```

###### Give the below configuration in the `Nodemailer` Config and get your mail in the console of running server
```
host: 'localhost',
port: 2025,
secure: false,
tls: {
  rejectUnauthorized: false,
},
```
