import { ApolloServer } from "apollo-server-express";
import express from 'express';

import { connect } from 'mongoose';
import { buildSchema } from "type-graphql";
import { CategoriesResolver } from "./resolver/CategoryResolver";
import { ProductResolver } from "./resolver/ProductResolver";


const main = async () => {

  const schema = await buildSchema({
    resolvers: [CategoriesResolver, ProductResolver],
    emitSchemaFile: true,
    validate: false
  })
  // create mongoose connection 
  const mongoose = await connect('mongodb://localhost:27017/graphql_test', 
    { useNewUrlParser : true}
  )
  await mongoose.connection;

  const apolloServer = new ApolloServer({schema});
  const app = express();
  apolloServer.applyMiddleware({app});
  app.listen({port: 3333}, 
      () => console.log('server is ready and listening at port 3333!!'))
};
main().catch(err => console.log(err)); 