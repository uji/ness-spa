import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/query',
  request: (operation) => {
    const idToken = localStorage.getItem('idToken')
    operation.setContext({
      headers: {
        authorization: idToken ? `Bearer ${idToken}` : '',
      },
    })
  },
})
export default function ({ app }) {
  app.setup = () => {
    provide(DefaultApolloClient, apolloClient)
  }
}
