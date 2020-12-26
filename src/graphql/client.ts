import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'

const host = 'http://localhost:3000';
// const host = 'https://55m2930t23.execute-api.ap-northeast-1.amazonaws.com/prod';

const httpLink = createHttpLink({
  uri: host + '/query',
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("idToken");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}`: "",
    },
  }
});

const cache = new InMemoryCache();
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});
