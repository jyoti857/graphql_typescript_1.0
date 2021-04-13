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
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const CategoryResolver_1 = require("./resolver/CategoryResolver");
const ProductResolver_1 = require("./resolver/ProductResolver");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [CategoryResolver_1.CategoriesResolver, ProductResolver_1.ProductResolver],
        emitSchemaFile: true,
        validate: false
    });
    // create mongoose connection 
    const mongoose = yield mongoose_1.connect('mongodb://localhost:27017/graphql_test', { useNewUrlParser: true });
    yield mongoose.connection;
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema });
    const app = express_1.default();
    apolloServer.applyMiddleware({ app });
    app.listen({ port: 3333 }, () => console.log('server is ready and listening at port 3333!!'));
});
main().catch(err => console.log(err));
//# sourceMappingURL=server.js.map