import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
state = {poems: [],
showPoemForm: false,
readPoems: []}

  componentDidMount(){
    fetch("http://localhost:3000/poems")
      .then((resp) => resp.json())
      .then((json) => this.setState({poems:json}))

  }

  submitNewForm = (e)=>{
    e.preventDefault()
    

    const newPoem = {title: e.target.elements.title.value,
    author: e.target.elements.author.value,
  content: e.target.elements.content.value}
 

  fetch("http://localhost:3000/poems", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPoem)
  })
  .then( (resp) => resp.json())
  .then((json) => this.setState({poems: [...this.state.poems, json]}))
}

  toggleNewForm = () => {
    this.setState({showPoemForm: !this.state.showPoemForm})
  }

  poemForm = ()=>{
    if (this.state.showPoemForm) {return <NewPoemForm handleSubmit = {this.submitNewForm}/>}
  }

  readHandler = (piid)=>{
    const pid = parseInt(piid)
    //check if this exists in readids
    const exists = this.state.readPoems.find((poem)=>{
      return poem === pid
    })

    if (exists){
      this.setState({readPoems: this.state.readPoems.filter((poem) => {return poem != pid})})
    }else{
      this.setState({readPoems: [...this.state.readPoems,pid]})
    }

    //if it does then remove it
    //if it doesnt then add it
  }

  handleDelete =(piid)=>{
    const pid = parseInt(piid)
    console.log(pid)
    fetch("http://localhost:3000/poems/"+pid, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then( (resp) => resp.json())
  .then(this.setState({poems: this.state.poems.filter((poem)=>{return poem.id!=pid})}))
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.toggleNewForm}> Show/hide new poem form</button>
          {this.poemForm()}
        </div>
        <PoemsContainer poems = {this.state.poems} readPoems= {this.state.readPoems} readHandler = {this.readHandler} handleDelete = {this.handleDelete}/>
      </div>
    );
  }
}

export default App;
