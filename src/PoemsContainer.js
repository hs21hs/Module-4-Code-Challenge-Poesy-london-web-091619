import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.poems.map((poem) => {
            return <Poem poemObj = {poem} readPoems= {this.props.readPoems} readHandler = {this.props.readHandler}/>
          })
          // render poems here
        }
      </div>
    );
  }
}

export default PoemsContainer;
