import React from 'react'
import { useState } from 'react';
import {  FaTrashAlt } from 'react-icons/fa';
import ItemList from './ItemList';

const Content = (props) => {
  return (
    <main>
       {props.items.length>0 ? (<ItemList items = {props.items}
       handleCheck = {props.handleCheck}
       handleDelete = {props.handleDelete}/>) : "Your List is Empty"}
    </main>
  )
}

export default Content