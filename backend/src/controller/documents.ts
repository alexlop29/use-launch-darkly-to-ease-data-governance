import { PutObjectRequest } from "aws-sdk/clients/s3";
import formidable from 'formidable';

class DocumentsController {
    constructor() {}

    addDocument(userId: string, file: formidable.Files<string>) {
        
    }
}

export { DocumentsController };
