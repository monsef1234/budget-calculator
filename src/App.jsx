import React, { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';
const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []
const App = () => {
  // Expenses State
  const [expense, setExpense] = useState(initialExpenses)
  // Charge State
  const [charge, setCharge] = useState('')
  // Amount State
  const [amount, setAmount] = useState('')

  const handleCharge = (eo) => {
      setCharge(eo.target.value)
  }
  const handleAmount = (eo) => {
      setAmount(eo.target.value)
  }
  const handleSubmit = (eo) => {
    eo.preventDefault()
    if(charge === "" || amount === "") {
      handleAlert({type: "danger", text: "Write Somthing Please!"})
    } else {
      if (edit) {
        const tempExpense = expense.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })
        setExpense(tempExpense)
        setEdit(false)
        handleAlert({type: "success", text: "edit done"})
      } else {
        setExpense([...expense , {
          id: uuidv4(), charge: charge, amount: amount
        }])
        handleAlert({type: "success", text: "item added"})
      }
      setAmount("")
      setCharge("")
    }
  }
  const [alert, setAlert] = useState({show: false})
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show:false})
    }, 3000);
  }
  const clearItems = () => {
    setExpense([])
    handleAlert({type: "danger", text: "all items deleted"})
  }
  const handleDelete = (id) => {
    const tempExpense = expense.filter(item => {
      return item.id !== id
    })
    setExpense(tempExpense)
    handleAlert({type: "danger", text:"item deleted"})
  }
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  const handleEdit = (id) => {
    const tempExpense = expense.find(item => {return item.id === id})
    const {charge, amount} = tempExpense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense))
  }, [expense])
  return (
    <>
      {alert.show && (
        <Alert type={alert.type} text={alert.text}/>
      )}
      <h1>budget calculator</h1>
      <main className='App'>
        <ExpenseForm edit={edit} submit={handleSubmit} charge={handleCharge} amount={handleAmount} chargeValue={charge} amountValue={amount}/>
        <ExpenseList initialExpenses={expense} clearItems={clearItems} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </main>
      <h1>total spending : <span className='total'>
        $ {expense.reduce((total, current) => {
            return total += Number(current.amount)
        }, 0)}
        </span>
      </h1>
    </>
  )
}

export default App