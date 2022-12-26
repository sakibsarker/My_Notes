import React from 'react'

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={date:new Date(),locale:'bn-BD',};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.clock=setInterval(()=>this.tick(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.clock)
  }
  handleClick(){
    this.setState({
      locale:'en-US'
    })
  }
  tick(){
    this.setState({
      date: new Date(),
    });
  }

  
  render() {
    return (
      <div>
        <h2>
          <span>{this.state.date.toLocaleTimeString(this.state.locale)}</span>
        </h2>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
} 

export default Home
