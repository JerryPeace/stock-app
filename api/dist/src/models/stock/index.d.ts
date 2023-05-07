import mongoose from 'mongoose';
export interface IStock {
    film: String;
    genre: String;
    lead_studio: String;
    audience_score: Number;
    profitability: Number;
    rotten_tomatoes: Number;
    worldwide_gross: String;
    year: Number;
}
declare const Stock: mongoose.Model<IStock, {}, {}, {}, mongoose.Schema<IStock, mongoose.Model<IStock, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IStock>>;
export default Stock;
