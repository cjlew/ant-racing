import React, { Component } from 'react';
import './stylesheets/App.css';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import gql from 'graphql-tag';
import AntsContainer from './components/AntsContainer.js';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://antserver-blocjgjbpw.now.sh/graphql' }),
  cache: new InMemoryCache()
});

const AntsGraph= graphql(gql`
   query antsGraphql {
     ants {
       name
       length
       color
       weight
     }
   }
 `)(AntsContainer);

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <h1>Ant Racing</h1>
          </div>
          <AntsGraph />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
