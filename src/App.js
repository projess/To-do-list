import { useState } from "react";
import './app.css'
const App = ()=>
{
    const [toDoList, setToDoList] = useState([]);
    const [newItem, setNewItem] = useState("");
    const listItems = toDoList.map((toDoItem) =>
    <li for="a"><input type="checkbox" id="a"/>{toDoItem}
    </li>);
    const addItem =(e)=>
    {
        e.preventDefault();
        if(newItem !== "")
        {
            const newList = toDoList.concat(newItem);
             setToDoList(newList);
             setNewItem("");
            document.forms['form_id'].reset();
        }
     
    }
    return(
      <div class="flex-container">
          <div class="flex-one">
              <h1>To Do List</h1>
              <ul>{listItems}</ul>
          </div>
          <div class="flex-two">
            <form id = "form_id" onSubmit ={addItem}>
                <input type="text" onChange={(e)=>setNewItem(e.target.value)}/>
                <br/><br/><br/>
                <input type="submit" value = "add item"/>
            </form>
          </div>
          
     </div>
    )
}
export default App;