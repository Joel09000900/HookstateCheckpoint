
import React, { Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "Software Developer",
        imgSrc: "path/to/image.jpg",
        profession: "Developer"
      },
      show: false,
      elapsedTime: 0
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    const { count } = this.state;
    const { Person, show, elapsedTime } = this.state;
    return (
    <>
      
      
      <div className="card">
        <button onClick={this.toggleShow}>
          {show ? (
            <div>
              <h2>{Person.fullName}</h2>
              <p>{Person.bio}</p>
              <img src={Person.imgSrc} alt={Person.fullName} />
              <p>Profession: {Person.profession}</p>
            </div>
          ) : null}
          <p>Elapsed Time: {elapsedTime} seconds</p>
          count is {count}
        </button>
      
      </div>
      
    </>
  )
}
}

export default App;
