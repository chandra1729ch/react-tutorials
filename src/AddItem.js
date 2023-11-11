import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'
const AddItem = (props) => {
    const ref  = useRef();
  return (
    <form className="addFord" onSubmit={props.handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        autoFocus
        ref = {ref}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value = {props.newItem}
        onChange={(e)=> props.setNewItem(e.target.value)}/>
        <button type='submit'
        aria-label='Add Item'
        onClick={() => ref.current.focus()}>
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem