import React from 'react'
import { MdSend } from "react-icons/md";

const ExpenseForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>charge</label>
          <input onChange={props.charge} value={props.chargeValue} type="text" className='form-control' id='charge' name='charge' placeholder='e.g rent'></input>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>amount</label>
          <input onChange={props.amount} value={props.amountValue} type="number" className='form-control' id='amount' name='amount' placeholder='e.g 4000'></input>
        </div>
      </div>
    <button type='submit' className='btn'>
    {props.edit ? "edit" : "submit"}
    <MdSend className='btn-icon'/>
  </button>
   
    </form>
  )
}

export default ExpenseForm