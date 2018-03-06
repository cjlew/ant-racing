import $ from 'jquery';

export default class AntAPI {

  getAnts() {
    $.getJSON('https://antserver-blocjgjbpw.now.sh/graphql')
      .then(({ results }) => this.setState({ ants: results }));
  }
}
