"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const axios_1 = __importDefault(require("axios"));
const Config_1 = require("./Config");
class PaymentService {
    constructor() {
        this.shopId = Config_1.Config.YOOKASSA_SHOP_ID;
        this.secretKey = Config_1.Config.YOOKASSA_SECRET_KEY;
    }
    createPayment(amount, description, returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post('https://api.yookassa.ru/v3/payments', {
                amount: {
                    value: amount.toFixed(2),
                    currency: 'RUB',
                },
                confirmation: {
                    type: 'redirect',
                    return_url: returnUrl,
                },
                description: description,
            }, {
                auth: {
                    username: this.shopId,
                    password: this.secretKey,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        });
    }
}
exports.PaymentService = PaymentService;
