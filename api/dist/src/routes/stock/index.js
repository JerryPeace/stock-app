"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stock_1 = __importDefault(require("@src/controllers/stock"));
const router = express_1.default.Router();
router.get('/:id', stock_1.default.getStock);
router.get('/', stock_1.default.getAllStock);
exports.default = router;
//# sourceMappingURL=index.js.map