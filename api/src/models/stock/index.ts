import mongoose from 'mongoose';

export interface IStock {
  film: String,
  genre: String,
  lead_studio: String,
  audience_score: Number,
  profitability: Number,
  rotten_tomatoes: Number,
  worldwide_gross: String,
  year: Number
}

const stockSchema = new mongoose.Schema<IStock>({
  film: String,
  genre: String,
  lead_studio: String,
  audience_score: Number,
  profitability: Number,
  rotten_tomatoes: Number,
  worldwide_gross: String,
  year: Number
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
