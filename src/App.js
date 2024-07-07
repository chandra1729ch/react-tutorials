import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
const API_URL = "https://localhost:3500/items";
const [items,setItems] =  useState([]);
const [fetchErrors, setFetchErrors] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const handleCheck = async (id) => {
  const listItems = items.map((item) => id === item.id ? {...item, checked: !item.checked} : item);
  setItems(listItems);
  const myItem = listItems.filter(item => item.id === id);
  const updateOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({checked: myItem[0].checked})
  }
  const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl, updateOptions);
  if(result) setFetchErrors(result);
}
useEffect(() => {
  const fetchItems = async() => {
    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw Error("Did not received expected O/P ......")
      const listItems = await response.json();
      setItems(listItems);
      setFetchErrors(null);
    } catch (error) {
      setFetchErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  setTimeout(() => {
    (async() => fetchItems())();
  },2000)
}, [])

const handleDelete = async (id) => {
  const itemsFilter = items.filter(item => item.id !== id);
  setItems(itemsFilter);

  const deleteOptions =  {
    method: 'DELETE'
  }
  const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl, deleteOptions);
  if(result) setFetchErrors(result);
}
const [search, setSearch] = useState('');
const [newItem, setNewItem] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem)return;
  addItem(newItem);
  setNewItem("");
}
const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchErrors(result);
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
      <main>
       {isLoading && !fetchErrors && <p>Loading items......</p>} 
      {!isLoading && fetchErrors && <p style={{color:"red"}}>{`Error: ${fetchErrors}`}</p>} 
      {!isLoading && !fetchErrors && <Content items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))} 
      setItems= {setItems}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
