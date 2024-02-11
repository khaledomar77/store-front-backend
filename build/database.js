"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { ENV, POSTGRES_HOST, POSTGRES_DB, POSTGRES_TEST_DB, POSTGRES_USER, POSTGRES_PASSWORD, SALT_ROUNDS, BCRYPT_PASSWORD, TOKEN_SECRET, } = process.env;
exports.client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: (ENV == 'dev') ? POSTGRES_DB : POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
});
exports.default = {
    host: POSTGRES_HOST,
    database: (ENV == 'dev') ? POSTGRES_DB : POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    tokenSecret: TOKEN_SECRET,
    saltRounds: SALT_ROUNDS,
    pepper: BCRYPT_PASSWORD
};
