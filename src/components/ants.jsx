import React from 'react';
import AntInfo from './antInfo.jsx';
import './../stylesheets/Ants.css';


export default class Ants extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ants: []
    };
  }

  componentDidMount() {

    this.setState({
       ants: this.props.ants
     });
  }


  render() {
    const AntsList = this.state.ants.map((ant, i )=> {
      return <AntInfo ant={ant} key={i}/>
    });


    return(
      <div id='ant-racing'>
        <ul id='ant-list'>
          {AntsList}
        </ul>
      </div>
    );
  }
}
