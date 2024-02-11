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
exports.destroy = exports.update = exports.create = exports.show = exports.index = void 0;
const book_1 = require("../models/book");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const store = new book_1.BookStore();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const articles = yield store.index();
    res.json(articles);
});
exports.index = index;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield store.show(req.params.id);
    res.json(article);
});
exports.show = show;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split('.')[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json('Access denied, invalid token');
        return;
    }
    try {
        const book = {
            title: req.body.title,
            author: req.body.author,
            totalPages: req.body.total_pages,
            summary: req.body.summary
        };
        const newBook = yield store.create(book);
        res.json(newBook);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield store.update(req.body);
    res.json(updated);
});
exports.update = update;
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield store.delete(req.body.id);
    res.json(deleted);
});
exports.destroy = destroy;
