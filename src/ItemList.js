import React from 'react'
import {  FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';

const ItemList = (props) => {
  return (
    <ul>
         {props.items.map((i) => (
            <LineItem
            key = {i.id}
            handleCheck = {props.handleCheck}
            handleDelete = {props.handleDelete}
            i = {i}/>
         ))}
       </ul>
  )
}

export default ItemList