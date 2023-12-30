## Node

```
nvm use 20.10.0
npm init --template typescript
npm install express
npm i --save-dev @types/express
npm install --save-dev --save-exact prettier
npm init @eslint/config
npm install --save-dev nodemon
npm install --save-dev jest
npm install --save-dev @types/jest
npm install --save-dev ts-jest
npm install dotenv --save
npm install aws-sdk
npm install --save-dev @types/node
npm i formidable
npm i --save-dev @types/formidable
npm install express-openid-connect
npm install --save multer
npm i --save-dev @types/multer
```

Remove use of formiddable - switching to multer

# Left Off

- Need to configure AWS SDK, Controller, Tests to Allow API Access to Store Files in S3
- Need to configure S3 buckets in multiple regions / Use Terraform
- Implement Auth0 Rules to Check User Location
- Launch Darkly Flag / Node Implementation to Check User Location Context

# Add note to discuss security implementations outside the scope of this project

- Scanning file uploads
- Rate limiting upload routes
- Advanced user validation and dynamically connecting documents to user
- Randomly generated document IDs

Resources:

- https://abbaslanbay.medium.com/uploading-files-to-aws-s3-with-multer-and-the-node-js-aws-sdk-7cad8dc87fc2
