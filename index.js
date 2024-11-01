import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
    });

const root = {
    hello: () => 'Hi there! I am Mandy, a GraphQL server!',
};
    
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Server is running on port 8080'));