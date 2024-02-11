"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const book_route_1 = __importDefault(require("./routes/book_route"));
const user_route_1 = __importDefault(require("./routes/user_route"));
const app = (0, express_1.default)();
const port = 3000 || process.env.PORT;
app.get('/', (req, res) => {
    res.send('welcome to the main page.');
});
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(book_route_1.default);
app.use(user_route_1.default);
app.listen(port, () => {
    console.log(`server running at port ${port}`);
});
