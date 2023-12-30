import { S3 } from "aws-sdk";

class DocumentsController {
  s3: S3;

  constructor() {
    this.s3 = new S3({ apiVersion: "2006-03-01" });
  }

  // Temporary Bucket; Will Update After Deploying LD Buckets & Config
  async addDocument(userSub: string, file: Express.Multer.File) {
    const params = {
      Bucket: "tfstate-748954057513",
      Key: `${userSub}-${file.originalname}`,
      Body: file.buffer,
    };

    try {
      await this.s3.upload(params).promise(); // Use promise() to handle the asynchronous operation
      return { Message: "Successful file upload" };
    } catch (err) {
      console.error("Error uploading file to S3:", err);
      return { Error: "Unable to upload the file" };
    }
  }
}

export { DocumentsController };
