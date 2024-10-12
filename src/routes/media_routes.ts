import { Router } from 'express';
import multer from 'multer';
import { uploadImageController } from '../controller/media_controller';

const router = Router();
const upload = multer();

router.post('/', upload.single('image') , uploadImageController);

export default router;
