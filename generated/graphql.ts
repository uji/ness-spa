import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Node = {
  id: Scalars['ID'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Thread = Node & {
  __typename?: 'Thread';
  id: Scalars['ID'];
  title: Scalars['String'];
  closed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type GetThreadsInput = {
  offsetTime?: Maybe<Scalars['DateTime']>;
  closed?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  node: Node;
  threads: Array<Thread>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryThreadsArgs = {
  input: GetThreadsInput;
};

export type NewThread = {
  title: Scalars['String'];
};

export type OpenThread = {
  threadID: Scalars['ID'];
};

export type CloseThread = {
  threadID: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createThread: Thread;
  openThread: Thread;
  closeThread: Thread;
};


export type MutationCreateThreadArgs = {
  input: NewThread;
};


export type MutationOpenThreadArgs = {
  input: OpenThread;
};


export type MutationCloseThreadArgs = {
  input: CloseThread;
};

export type ThreadsQueryVariables = Exact<{ [key: string]: never; }>;


export type ThreadsQuery = (
  { __typename?: 'Query' }
  & { threads: Array<(
    { __typename?: 'Thread' }
    & Pick<Thread, 'id' | 'title' | 'createdAt' | 'updatedAt' | 'closed'>
  )> }
);


export const ThreadsDocument = gql`
    query threads {
  threads(input: {closed: false}) {
    id
    title
    createdAt
    updatedAt
    closed
  }
}
    `;

/**
 * __useThreadsQuery__
 *
 * To run a query within a Vue component, call `useThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useThreadsQuery();
 */
export function useThreadsQuery(options: VueApolloComposable.UseQueryOptions<ThreadsQuery, ThreadsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ThreadsQuery, ThreadsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ThreadsQuery, ThreadsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ThreadsQuery, ThreadsQueryVariables>(ThreadsDocument, {}, options);
}
export type ThreadsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ThreadsQuery, ThreadsQueryVariables>;