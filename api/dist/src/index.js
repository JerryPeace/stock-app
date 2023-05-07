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
exports.dbName = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const stock_1 = __importDefault(require("@src/routes/stock"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
const app = (0, express_1.default)();
const port = 4000;
exports.dbName = 'stock-homework';
mongoose_1.default.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lek1tsx.mongodb.net/${exports.dbName}?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/stock', stock_1.default);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map