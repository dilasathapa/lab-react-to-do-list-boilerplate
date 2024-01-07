
import React from 'react';
import './App.css'
import TodoItem from './Component/Todoitem';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>

//       </div>
//     </>
//   )
// }


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     const countt = this.state.count;

//     return (
//       <>
//         <div className="card">
//           <button onClick={() => this.setState({ count: countt + 1 })}>
//             count is {countt}
//           </button>
//         </div>
//       </>
//     )
//   }
// }

// export default App;

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input : "",
      todoList : [],
    }
  }

  // chnaging input
  inputChange =(e) =>{
    this.setState({input : e.target.value})
  }

  // submitting the input and adding input to the todoList array
  formSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state.todoList)
    if(this.state.input.length > 0){
      this.setState({
        input : "",
        todoList : [...this.state.todoList, this.state.input]
      })
    }
  }

  // update function to update the todo data
  updateItem = (ele, index) =>{
    let todoitems = this.state.todoList;
    todoitems.splice(index, 1, ele)
    this.setState({})
  }

  // deleteItem from todolist

  deleteItem = (index)=>{
    let todoitems = this.state.todoList;
    todoitems.splice(index, 1)
    this.setState({})
  }



















  render(){
    return (
      <>
        <h1>Todo List</h1>
        <form onSubmit={this.formSubmit}>
          <input type="text" onChange={this.inputChange} value={this.state.input} />
          <button>ADD</button>
        </form>
        <p>Input : {this.state.input}</p>

        <div className="todoLists">
          <h3>My Todo List</h3>
          {
            this.state.todoList.length == 0 ? (
              <h4>todoList is empty for now</h4>
              ) : (
              // {/* map the todoList data*/}

              this.state.todoList.map((ele, index)=>{
                return (
                  <>
                  <TodoItem 
                    e = {ele}
                    index = {index}
                    updateItem = {this.updateItem}
                    deleteItem = {this.deleteItem}
                  />
                  </>
                )
              })


            )
          }
        </div>
      </>
    )
  }
}

export default App;


