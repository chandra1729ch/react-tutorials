import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const name = "Chandra";
  
  const [items,setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "Item 1"
    },
    {
        id: 2,
        checked: true,
        item: "Item 2"
    },
    {
        id: 3,
        checked: true,
        item: "Item 3"
    }
]);
const handleCheck = (id) => {
  const listItems = items.map((item) => id === item.id ? {...item, checked: !item.checked} : item);
  setItems(listItems);
  localStorage.setItem("shoppinglist",JSON.stringify(listItems));
}
const handleDelete = (id) => {
  const itemsFilter = items.filter(item => item.id !== id);
  setItems(itemsFilter);
  localStorage.setItem("shoppinglist",JSON.stringify(itemsFilter));
}
  return (
    <div className="App">
      <Header title = "Groceries List"/>
      <Content items = {items} 
      setItems= {setItems}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
