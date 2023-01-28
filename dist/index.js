"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)({
    path: path_1.default.resolve(__dirname, '../.env'),
});
const isDev = process.env.NODE_ENV === 'development';
const server = (0, express_1.default)();
try {
    console.log('Working');
}
catch (err) {
    throw new Error(`${err}`);
}
if (isDev) {
    server.use(express_1.default.static(path_1.default.resolve(__dirname, '../../client/dist')));
}
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map