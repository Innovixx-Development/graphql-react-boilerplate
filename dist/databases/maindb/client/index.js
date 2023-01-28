Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, NotFoundError, decompressFromBase64, getPrismaClient, sqltag, empty, join, raw, Decimal, Debug, objectEnumValues, makeStrictEnum, Extensions } = require('./runtime/index');
const Prisma = {};
exports.Prisma = Prisma;
/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
    client: "4.9.0",
    engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
};
Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = () => (val) => val;
/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;
Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull
};
const path = require('path');
const { findSync } = require('./runtime');
const fs = require('fs');
// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/';
// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname;
// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "src/databases/maindb/client",
    "databases/maindb/client",
], ['d'], ['d'], 1)[0];
const dirname = regularDirname || foundDirname || __dirname;
/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }
exports.Prisma.QueryMode = makeEnum({
    default: 'default',
    insensitive: 'insensitive'
});
exports.Prisma.SortOrder = makeEnum({
    asc: 'asc',
    desc: 'desc'
});
exports.Prisma.TestScalarFieldEnum = makeEnum({
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Prisma.ModelName = makeEnum({
    Test: 'Test'
});
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Test\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Test\",\"plural\":\"tests\",\"findUnique\":\"findUniqueTest\",\"findUniqueOrThrow\":\"findUniqueTestOrThrow\",\"findFirst\":\"findFirstTest\",\"findFirstOrThrow\":\"findFirstTestOrThrow\",\"findMany\":\"findManyTest\",\"create\":\"createOneTest\",\"createMany\":\"createManyTest\",\"delete\":\"deleteOneTest\",\"update\":\"updateOneTest\",\"deleteMany\":\"deleteManyTest\",\"updateMany\":\"updateManyTest\",\"upsert\":\"upsertOneTest\",\"aggregate\":\"aggregateTest\",\"groupBy\":\"groupByTest\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}";
const dmmf = JSON.parse(dmmfString);
exports.Prisma.dmmf = JSON.parse(dmmfString);
/**
 * Create the Client
 */
const config = {
    "generator": {
        "name": "client",
        "provider": {
            "fromEnvVar": null,
            "value": "prisma-client-js"
        },
        "output": {
            "value": "/workspaces/graphql-react-boilerplate-new/src/databases/maindb/client",
            "fromEnvVar": null
        },
        "config": {
            "engineType": "library"
        },
        "binaryTargets": [],
        "previewFeatures": [],
        "isCustomOutput": true
    },
    "relativeEnvPaths": {
        "rootEnvPath": "../../../../.env",
        "schemaEnvPath": "../../../../.env"
    },
    "relativePath": "..",
    "clientVersion": "4.9.0",
    "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
    "datasourceNames": [
        "db"
    ],
    "activeProvider": "postgresql",
    "dataProxy": false
};
config.document = dmmf;
config.dirname = dirname;
const { warnEnvConflicts } = require('./runtime/index');
warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
});
const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "src/databases/maindb/client/libquery_engine-debian-openssl-1.1.x.so.node");
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/databases/maindb/client/schema.prisma");
//# sourceMappingURL=index.js.map