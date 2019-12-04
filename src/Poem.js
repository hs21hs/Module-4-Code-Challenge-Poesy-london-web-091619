import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  showRead = ()=>{
    //console.log(this.props.readPoems)
    if (this.props.readPoems.includes(this.props.poemObj.id)){
      return "mark as unread"
    }else{
      return"mark as read"
    }
    //if show readPoems contains this poems id then return mark as unread
  }

  render() {
    return (
      <div>
        <h3>{this.props.poemObj.title}</h3>
        <p>{this.props.poemObj.content}</p>
        <p>
          <strong>{this.props.poemObj.author}</strong>
        </p>
        <button id = {this.props.poemObj.id} onClick = {(e)=>{this.props.readHandler(e.target.id)}}>{this.showRead()}</button>
        <button id = {this.props.poemObj.id} onClick = {(e)=>{this.props.handleDelete(e.target.id)}}>delete</button>
      </div>
     
    );
  }
}

export default Poem;
