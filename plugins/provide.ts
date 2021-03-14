import { Context } from '@nuxt/types'
import { provide, InjectionKey } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { AuthenticatorKey, Authenticator } from '@/types/firebase/authenticator'
import { RouterHandlerKey, RouterHandler } from '@/types/routerHandler'
import { apolloClient } from '@/types/apolloClient'
import { useThreadListQuery } from '@/generated/graphql'

export type GetThreadList = typeof useThreadListQuery
export const getThreadListKey: InjectionKey<GetThreadList> = Symbol('getThreadList')

export default function ({ app }: Context) {
  app.setup = () => {
    provide(AuthenticatorKey, new Authenticator())
    provide(DefaultApolloClient, apolloClient)
    provide(getThreadListKey, useThreadListQuery)
    provide(RouterHandlerKey, new RouterHandler)
  }
}
