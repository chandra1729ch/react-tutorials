import React from 'react'
import {  FaTrashAlt } from 'react-icons/fa';

const LineItem = (props) => {
  return (
    <li className='item' key= {props.i.id}>
                <input type='checkbox' onChange={() => props.handleCheck(props.i.id)} checked={props.i.checked}/>
                <label
                style={props.i.checked?{textDecoration: 'line-through'}: null}
                onDoubleClick={() => props.handleCheck(props.i.id)}
                >{props.i.item}</label>
                <FaTrashAlt 
                onClick={() => {props.handleDelete(props.i.id)}}
                role="button" 
                tabIndex="0"
                aria-label={`Delete ${props.i.item}`}/>
            </li>
  )
}

export default LineItem