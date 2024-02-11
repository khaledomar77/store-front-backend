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
exports.UserModel = void 0;
const database_1 = require("../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;
class UserModel {
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const conn = yield database_1.client.connect();
                const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *';
                const hash = bcrypt_1.default.hashSync(u.password + pepper, parseInt(saltRounds));
                const result = yield conn.query(sql, [u.username, hash]);
                const user = result.rows[0];
                conn.release();
                return user;
            }
            catch (err) {
                throw new Error(`unable to create user (${u.username}): ${err}`);
            }
        });
    }
    authenticate(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.client.connect();
            const sql = 'SELECT password_digest FROM users WHERE username=($1)';
            const result = yield conn.query(sql, [username]);
            console.log(password + pepper);
            if (result.rows.length) {
                const user = result.rows[0];
                console.log(user);
                if (bcrypt_1.default.compareSync(password + pepper, user.password_digest)) {
                    return user;
                }
            }
            return null;
        });
    }
}
exports.UserModel = UserModel;
