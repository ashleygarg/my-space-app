import React from 'react';
import Main from "./modules/ViewTable/Listing";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2 style={{ textAlign: 'center', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>Space Launches🚀</h2>
      </div>
      <Main />
    </ApolloProvider>
  );
}