import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import Schema from './graphql/schema';

const app = new Koa();
const router = new Router();

router.get('/ping', function (ctx) {
  ctx.body = 'pong';
});

router.all('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log('Listening on :3000');
