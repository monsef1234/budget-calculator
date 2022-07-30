import React from 'react'
import ExpenseItem from './ExpenseItem'
import { FaTrash } from 'react-icons/fa'

const ExpenseList = (props) => {
  return (
   <>
    <ul className='list'>
        {props.initialExpenses.map(expense => {
            return <ExpenseItem key={expense.id} expense={expense} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>
        })}
    </ul>
    {props.initialExpenses.length > 0 && (
        <button className='btn' onClick={props.clearItems}>clear expenses <FaTrash className='btn-icon' /></button>
    )}
   </>
  )
}

export default ExpenseList