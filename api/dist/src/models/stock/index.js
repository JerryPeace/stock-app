"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stockSchema = new mongoose_1.default.Schema({
    film: String,
    genre: String,
    lead_studio: String,
    audience_score: Number,
    profitability: Number,
    rotten_tomatoes: Number,
    worldwide_gross: String,
    year: Number
});
const Stock = mongoose_1.default.model('Stock', stockSchema);
exports.default = Stock;
//# sourceMappingURL=index.js.map