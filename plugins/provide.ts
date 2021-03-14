import { Context } from '@nuxt/types'
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from 'apollo-boost'
import { AuthenticatorKey, Authenticator } from '@/types/firebase/authenticator'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/query',
  // uri: 'https://55m2930t23.execute-api.ap-northeast-1.amazonaws.com/prod/query',
  request: (operation) => {
    const idToken = localStorage.getItem('idToken')
    operation.setContext({
      headers: {
        authorization: idToken ? `Bearer ${idToken}` : '',
      },
    })
  },
})

export default function ({ app }: Context) {
  app.setup = () => {
    provide(AuthenticatorKey, new Authenticator())
    provide(DefaultApolloClient, apolloClient)
  }
}
