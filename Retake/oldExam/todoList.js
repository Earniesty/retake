// class Todo {
//     constructor(id, description) {
//       this.id = id
//       this.description = description
//     }
//     getTodo() {
//       return { id: this.id, description: this.description }
//     }
//     setDescription(newDescription) {
//       newDescription = this.description
//     }
//   }
//   function TodoManagement() {
//     //outer function
//     let todos = []
//     let currentId = 1 //this will help in auto-generating IDs for new Todos
//     // return { //nested functions
//     function addTodo(des) {
//       const todo = new Todo(currentId++, des)
//       return todos.push(todo)
//       // return todos.length
//     }
//     function findTodo(searchId) {
//       return todos.find((todo) => todo.id === searchId)
//     }
//     function findIndexTodo(searchId) {
//       return todos.findIndex((todo) => todo.id === searchId)
//     }
//     function removeTodo(removeId) {
//       const indexToRemove = findIndexTodo(removeId)
//       if (indexToRemove !== -1) {
//         todos.splice(indexToRemove, 1)
//       }
//     }
//     function getTodo() {
//       return todos
//     }
//     // }
//     return { addTodo, findTodo, findIndexTodo, removeTodo, getTodo }
//   }
//   const tdm = TodoManagement()
//   console.log(tdm.addTodo('reading')) //1
//   console.log(tdm.addTodo('swimming')) //2
//   console.log(tdm.getTodo())
//   //[
//   //     Todo { id: 1, description: 'reading' },
//   //     Todo { id: 2, description: 'swimming' }
//   //   ]
//   console.log(tdm.findTodo(1)) //Todo { id: 1, description: 'reading' }
//   console.log(tdm.findIndexTodo(2)) //1
//   console.log(tdm.removeTodo(2))
//   console.log(tdm.getTodo()) //[ Todo { id: 1, description: 'reading' } ]

class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }

  getTodo() {
    return { id: this.id, description: this.description };
  }

  setDescription(newDescription) {
    newDescription = this.description;
  }
}

function TodoManagement() {
  let todos = [];
  let currentId = 1
  function addTodo(desc) {
    const newTodo = new Todo(currentId++, desc)
      todos.push(newTodo)
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId)
  }

  function removeTodo(removeId) {
      const indexRemoved = findIndexTodo(removeId)
      if (indexRemoved !== -1) {
        todos.splice(indexRemoved, 1)
      }
  }

  function getTodos() {
    return todos
  }

  return {addTodo, findTodo, findIndexTodo, removeTodo, getTodos}


}


  const tdm = TodoManagement()
  console.log(tdm.addTodo('reading')) //1
  console.log(tdm.addTodo('swimming')) //2
  console.log(tdm.getTodos())
  //[
  //     Todo { id: 1, description: 'reading' },
  //     Todo { id: 2, description: 'swimming' }
  //   ]
  console.log(tdm.findTodo(1)) //Todo { id: 1, description: 'reading' }
  console.log(tdm.findIndexTodo(2)) //1
  console.log(tdm.removeTodo(2))
  console.log(tdm.getTodos()) //[ Todo { id: 1, description: 'reading' } ]

