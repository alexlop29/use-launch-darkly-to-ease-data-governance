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

# Add note to discuss security implementations outside the scope of this project

- Scanning file uploads
- Rate limiting upload routes
- Advanced user validation and dynamically connecting documents to user
- Randomly generated document IDs

Resources:

- https://abbaslanbay.medium.com/uploading-files-to-aws-s3-with-multer-and-the-node-js-aws-sdk-7cad8dc87fc2
- https://dev.to/yuvraj2112/upload-files-to-s3-in-node-js-3hfp
- https://github.com/expressjs/multer
- https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

Auth0
https://community.auth0.com/t/getting-current-location-using-auth0-rules/83826

Launch Darkly
https://docs.launchdarkly.com/sdk/server-side/node-js
