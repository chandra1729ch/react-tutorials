import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  const name = "Chandra";
  
const [items,setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")));
const handleCheck = (id) => {
  const listItems = items.map((item) => id === item.id ? {...item, checked: !item.checked} : item);
  setAndSaveItems(listItems);
}
const handleDelete = (id) => {
  const itemsFilter = items.filter(item => item.id !== id);
  setAndSaveItems(itemsFilter);
}
const [search, setSearch] = useState('');
const [newItem, setNewItem] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem)return;
  addItem(newItem);
  setNewItem("");
}
const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
}
const setAndSaveItems = (itemsFilter) => {
  setItems(itemsFilter);
  localStorage.setItem("shoppinglist",JSON.stringify(itemsFilter));
}
  return (
    <div className="App">
      <Header title = "Groceries List"/>
      
      <AddItem newItem= {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <SearchItem  search={search}
      setSearch = {setSearch}/>
      <Content items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))} 
      setItems= {setItems}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
