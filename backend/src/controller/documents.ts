import { S3 } from "aws-sdk";

class DocumentsController {
  constructor() {}

  // Temporary Bucket; Will Update After Deploying LD Buckets & Config
  addDocument(userSub: string, file: Express.Multer.File): { [key: string]: string }{
    const s3 = new S3({apiVersion: '2006-03-01'});
    const params = {
      Bucket: "tfstate-748954057513",
      Key: `${userSub}/${file.originalname}`,
      Body: file.buffer,
    };

    let message: { [key: string]: string } = {};
    s3.upload(params, (err: any) => {
        if (err){
            message = { "Error": "Unable to upload the file" };
        }
        message = { "Message": "Successful file upload" };
    })

    return message;
  }
}

export { DocumentsController };
