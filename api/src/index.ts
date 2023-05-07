import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import stockRoutes from '@src/routes/stock';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const app = express();
const port = 4000;
export const dbName = 'stock-homework';
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lek1tsx.mongodb.net/${dbName}?retryWrites=true&w=majority`).then(() => {
  console.log('Connected to MongoDB');
}).catch((err: Error) => {
  console.log('Failed to connect to MongoDB', err);
});
app.use(cors())
app.use(express.json());
app.use('/stock', stockRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
