import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const host = 'http://localhost:3000';
// const host = 'https://55m2930t23.execute-api.ap-northeast-1.amazonaws.com/prod';

const httpLink = createHttpLink({
  uri: host + '/query',
  credentials: 'include'
});
const cache = new InMemoryCache();
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});
