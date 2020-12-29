import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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


export const ThreadsDocument: DocumentNode<ThreadsQuery, ThreadsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"threads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"closed"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}}]}}]}}]};