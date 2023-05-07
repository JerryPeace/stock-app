import mongoose from 'mongoose';
import * as dotenv from "dotenv";
import Stock from '@src/models/stock';
import { dbName } from './index';
import data from '@src/stock.json';
dotenv.config({ path: __dirname+'/.env' });

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lek1tsx.mongodb.net/${dbName}?retryWrites=true&w=majority`).then(async() => {
  const allStock = await Stock.find();
  if (!allStock || allStock.length === 0) {
    Stock.insertMany(data, (err) => {
      console.log(err || 'Initial data inserted into MongoDB');
      mongoose.connection.close();
    });
  } else {
    console.log('data already existed');
    mongoose.connection.close();
  }

}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});
