import express from "express";
import { requiresAuth } from "express-openid-connect";
import { DocumentsController } from "../controllers/documents";
import { upload } from "../config/multer";

const documentRoute = express.Router();
documentRoute.use(express.json());

// Improve Error Handling
documentRoute.post(
  "/",
  requiresAuth(),
  upload.single("file"),
  async (req, res) => {
    let userSub = req.oidc.user?.sub;
    let file = req.file;
    if (!file) {
      res.status(400).json({
        Error: "Missing File",
      });
      return;
    }
    const documents = new DocumentsController();
    const uploadFile = await documents.addDocument(userSub, file);
    if (uploadFile.hasOwnProperty("Error")) {
      res.status(500).json(uploadFile);
      return;
    }
    res.status(200).json(uploadFile);
  },
);

export { documentRoute };
