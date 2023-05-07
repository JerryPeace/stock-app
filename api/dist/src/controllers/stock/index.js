"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stock_1 = __importDefault(require("@src/models/stock"));
const getAllStock = async (req, res) => {
    try {
        const allStock = await stock_1.default.find();
        res.json(allStock);
    }
    catch (error) {
        res.status(500).send();
    }
};
const getStock = async (req, res) => {
    try {
        const stock = await stock_1.default.findById(req.params.id);
        res.json(stock);
    }
    catch (error) {
        res.status(500).send();
    }
};
exports.default = {
    getAllStock,
    getStock
};
//# sourceMappingURL=index.js.map