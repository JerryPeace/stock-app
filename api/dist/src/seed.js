"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const stock_1 = __importDefault(require("@src/models/stock"));
const index_1 = require("./index");
const stock_json_1 = __importDefault(require("@src/stock.json"));
dotenv.config({ path: __dirname + '/.env' });
mongoose_1.default.set("strictQuery", false);
mongoose_1.default.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lek1tsx.mongodb.net/${index_1.dbName}?retryWrites=true&w=majority`).then(async () => {
    const allStock = await stock_1.default.find();
    if (!allStock || allStock.length === 0) {
        stock_1.default.insertMany(stock_json_1.default, (err) => {
            console.log(err || 'Initial data inserted into MongoDB');
            mongoose_1.default.connection.close();
        });
    }
    else {
        console.log('data already existed');
        mongoose_1.default.connection.close();
    }
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
//# sourceMappingURL=seed.js.map