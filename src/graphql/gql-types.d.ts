export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  threads: Array<Threads>;
};

export type Threads = {
  __typename?: "Threads";
  id: Scalars["Strings"];
  title: Scalars["String"];
  closed: Scalars["Boolean"];
};
