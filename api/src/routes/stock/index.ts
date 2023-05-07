import express from 'express';
import stockController from '@src/controllers/stock';

const router = express.Router();

router.get('/:id', stockController.getStock);
router.get('/', stockController.getAllStock);

export default router;