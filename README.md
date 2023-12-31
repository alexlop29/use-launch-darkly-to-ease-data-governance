# About
Demonstrates using launch darkly kill switches and contexts to ease data governance

In a [recent blog post](https://launchdarkly.com/blog/what-is-a-kill-switch-software-development/), Launch Darkly provides insight into the potential use case of a `kill switch` feature flag. A `kill switch` provides the capability of seamlessly enabling or disabling a feature from the Launch Darkly dashboard. Launch Darkly suggests leveraging `kill switches` to ease compliance and regulation management, such as enabling data retention for users based on their geographic location. `use-launch-darkly-to-ease-data-governance` demonstrates how to use Auth0's geolocation features, distributed AWS resources, and Launch Darkly to dynamically store user data.

# 🔧 Core libraries
- [Node.js(20.10.0)](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Auth0 Express OpenID Connect](https://github.com/auth0/express-openid-connect)
- [AWS SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
- [LD Node.js SDK](https://docs.launchdarkly.com/sdk/server-side/node-js)
- [Multer](https://github.com/expressjs/multer)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Development Libraries
- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Postman - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)

## Terraform, Providers, & Libraries
- [Terraform](https://developer.hashicorp.com/terraform/install)
- [Auth0 Provider](https://registry.terraform.io/providers/auth0/auth0/latest/docs)
- [AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Launch Darkly Provider](https://registry.terraform.io/providers/launchdarkly/launchdarkly/latest/docs)

# 🔈 Disclaimer
The scope of this project is limited to showcasing how to leverage Auth0 Actions, AWS S3 Buckets, and Launch Darkly kill switches to dynamically toggle the storage location based on the user's geographic information. Given the minimalastic approach taken, there are several areas of potential improvements, such as rate-limiting the upload route, scanning the user upload for malicious input, randomly-generated file names, and improved error handling. While these functionalties have not yet been included, please `watch` the project as they will be added soon.

# 🚧 To Do
- Clean up.
- Add tests.
- Scan file uploads.
- Add API rate-limiting.
- Randomly generate user file names.
- Improve error handling. 

# 📘 Recommended Reading

## Launch Darkly
- [Using LaunchDarkly with TypeScript](https://launchdarkly.com/blog/using-launchdarkly-with-typescript/)
- [Understanding Contexts](https://docs.launchdarkly.com/home/contexts)
- [Stack Overflow - LaunchDarkly Contexts](https://stackoverflow.com/questions/71173548/how-are-users-identified-in-launchdarkly)

## Auth0
- [Country Based Access with Auth0 Actions](https://auth0.com/blog/country-based-access-with-auth0-actions/)
- [Actions - Flows and Triggers](https://auth0.com/docs/customize/actions/flows-and-triggers/login-flow/event-object)

## Multer
- [Upload Files to S3 With Multer and the AWS SDK](https://abbaslanbay.medium.com/uploading-files-to-aws-s3-with-multer-and-the-node-js-aws-sdk-7cad8dc87fc2)
