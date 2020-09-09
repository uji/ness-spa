import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type NewThread = {
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createThread: Thread;
};

export type MutationCreateThreadArgs = {
  input: NewThread;
};

export type Thread = {
  __typename?: 'Thread';
  id: Scalars['String'];
  title: Scalars['String'];
  closed: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  threads: Array<Thread>;
};
