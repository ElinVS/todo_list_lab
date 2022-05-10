import React, {useState} from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([
    { name: "Buy Shopping", isPriority: true},
    { name: "Clean Bathroom", isPriority: false},
    { name: "Car's MOT", isPriority: true}
  ]);

  const [newItem, setNewItem] = useState("Add new ToDo")

  const [newTask, setNewTask] = useState(false)

 
  const itemNodes = items.map((item, index)=>{
    return(
      <li key={index} className={item.isPriority ? "high": "low"}>
        <span>{item.name}</span>

        {item.isPriority ? <span className='high'>High</span> : 
        
        <span className='low'>Low</span> 
        
       }
      </li>
    )
  })

  const handlePriority = ((event) => {
    if (event.target.value === "true"){
      setNewTask(true)
    }else {
      setNewTask(false)
    }
    

  })


  const handleItemInput = ((event) => {
    setNewItem(event.target.value)
  })


  const saveNewItem = ((event) => {
    event.preventDefault()
    const copyItem = [...items]
    copyItem.push({name: newItem , isPriority: newTask})
    setItems(copyItem)
    setNewItem("")

  })



  return (
    <div className='App'>
      <h1>ToDo's</h1>

     

      <form onSubmit = {saveNewItem}>
        <label htmlFor='new-item'></label>
        <input id='new-item' type='text' onChange={handleItemInput} value={newItem} />
        <label htmlFor='new-item' name='radio-buttons' value={newTask ? "true" : "false"} ></label>
        High<input name='radio-buttons' type='radio'  value='true' onChange={handlePriority}/>
        Low<input name='radio-buttons' type='radio' value='false' onChange={handlePriority}/>
        <input type='submit' value='Save Item' onSubmit = {saveNewItem}/>
      </form>

      <ul>
        {itemNodes}
      </ul>

    </div>
    
  );
}

export default App;
