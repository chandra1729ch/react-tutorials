import React from 'react'
import { useState } from 'react';
import {  FaTrashAlt } from 'react-icons/fa';

const Content = (props) => {
  return (
    <main>
       <ul>
         {props.items.map((i) => (
            <li className='item' key= {i.id}>
                <input type='checkbox' onChange={() => props.handleCheck(i.id)} checked={i.checked}/>
                <label
                style={i.checked?{textDecoration: 'line-through'}: null}
                onDoubleClick={() => props.handleCheck(i.id)}
                >{i.item}</label>
                <FaTrashAlt 
                onClick={() => {props.handleDelete(i.id)}}
                role="button" 
                tabIndex="0"/>
            </li>
         ))}
       </ul>
    </main>
  )
}

export default Content