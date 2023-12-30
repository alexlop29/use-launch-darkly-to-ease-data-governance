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
npm install @launchdarkly/node-server-sdk
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
https://auth0.com/blog/country-based-access-with-auth0-actions/
https://auth0.com/docs/customize/actions/flows-and-triggers/login-flow/event-object
https://stackoverflow.com/questions/63697348/how-do-i-know-whether-my-user-is-from-eu-countries

Launch Darkly
https://docs.launchdarkly.com/sdk/server-side/node-js
https://stackoverflow.com/questions/57871661/how-can-i-programmatically-set-the-user-details-for-launch-darkly-in-my-react-ap
https://stackoverflow.com/questions/71173548/how-are-users-identified-in-launchdarkly

LEFT OFF

- Finish Configuring SDK
- Dynamically create context using the kind: user, key: auth0Id, timeZone: auth0.timeZone
- Update the feature flag targetting rule to select a timeZone in EU.
