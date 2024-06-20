import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

import {  contact, depBack, getDepart } from "../controller/departmentController.js";
const router = express.Router();
// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir); 
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const fileName = `${file.fieldname}-${Date.now()}${ext}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });


router.post('/add',upload.single('image'), depBack);
router.post('/contact', contact);
router.get('/', getDepart);



export default router