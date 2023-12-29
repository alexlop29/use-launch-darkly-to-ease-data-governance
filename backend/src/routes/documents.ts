import express from "express";
import { auth, requiresAuth } from "express-openid-connect";
import { config } from "../config/auth";
import formidable from 'formidable';
import { DocumentsController } from "../controller/documents";

const documentRoute = express.Router();
documentRoute.use(express.json());

documentRoute.post("/", requiresAuth(), async (req, res) => {
    const form = formidable({});
    form.parse(req, (err, fields, files) => {
        if (err){
            res.status(500).json({
                status: "Failed to upload file",
            });
            return;
        }
        let userMetaData = req.oidc.user;
        const documents = new DocumentsController();
        const uploadFile = documents.addDocument(userMetaData, files);
    })
});

export { documentRoute };
