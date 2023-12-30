import { S3 } from "aws-sdk";
import { client } from "../config/launchdarkly";
import * as ld from "@launchdarkly/node-server-sdk";

class DocumentsController {
  s3: S3;

  constructor() {
    this.s3 = new S3({ apiVersion: "2006-03-01" });
  }

  // Improve error handling
  async addDocument(
    userSub: string,
    userTimeZone: string,
    file: Express.Multer.File,
  ) {
    const context: ld.LDContext = {
      kind: "user",
      key: userSub,
      timeZone: userTimeZone,
    };

    try {
      let params: S3.Types.PutObjectRequest;
      const showFeature = await client.variation(
        "configure-european-infrastructure",
        context,
        false,
      );
      await client.track("event-called", context);
      if (showFeature) {
        params = {
          Bucket: "eu-west-1-documents-for-node-app",
          Key: `${userSub}-${file.originalname}`,
          Body: file.buffer,
        };
      } else {
        params = {
          Bucket: "us-east-1-documents-for-node-app",
          Key: `${userSub}-${file.originalname}`,
          Body: file.buffer,
        };
      }
      await this.s3.upload(params).promise();
      return { Message: "Successful file upload" };
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      return { Error: "Unable to upload the file" };
    }
  }
}

export { DocumentsController };
