"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maindb = void 0;
const client_1 = require("./maindb/client");
exports.maindb = new client_1.PrismaClient({
    log: [
        { emit: 'event', level: 'query' },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
    ],
    errorFormat: 'minimal',
});
//# sourceMappingURL=index.js.map