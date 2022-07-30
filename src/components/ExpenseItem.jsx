import React from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
const ExpenseItem = (props) => {
    const handleDelete = props.handleDelete
    const handleEdit = props.handleEdit
  return (
    <li className='item'>
        <div className='info'>
            <span className='expense'>{props.expense.charge}</span>
            <span className='amount'>${props.expense.amount}</span>
        </div>
        <div>
            <button onClick={() => {
                handleEdit(props.expense.id)
            }} className='edit-btn' aria-label='edit button'>
                <FaPen />
            </button>
            <button onClick={() => {
                handleDelete(props.expense.id)
            }} className='clear-btn' aria-label='clear button'>
                <FaTrash />
            </button>
        </div>
    </li>
  )
}

export default ExpenseItem