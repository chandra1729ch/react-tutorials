import React from 'react'
import {FaPlus} from 'react-icons/fa'
const AddItem = (props) => {
  return (
    <form className="addFord" onSubmit={props.handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value = {props.newItem}
        onChange={(e)=> props.setNewItem(e.target.value)}/>
        <button type='submit'
        aria-label='Add Item'>
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem