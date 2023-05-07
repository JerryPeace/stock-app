import { Request, Response } from 'express';
import Stock from '@src/models/stock';

const getAllStock = async (req: Request, res: Response) => {
  try {
    const allStock = await Stock.find();
    res.json(allStock);
  } catch (error) {
    res.status(500).send();
  }
};


const getStock = async (req: Request, res: Response) => {
  try {
    const stock = await Stock.findById(req.params.id);
    res.json(stock);
  } catch (error) {
    res.status(500).send();
  }
};

export default {
  getAllStock,
  getStock
};