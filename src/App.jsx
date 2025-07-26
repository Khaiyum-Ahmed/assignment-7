import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'

function App() {

  const [balance, setBalance ] = useState(0);

  const handleFreeCredit = () =>{
    const money = 15000000;
    const newBalnace = balance + money;
    setBalance(newBalnace);
    alert('Successfully claimed free credits!')
  }

  return (
    <>
      <Header balance={balance}
      ></Header>
      <Banner handleFreeCredit={handleFreeCredit}
      ></Banner>
    </>
  )
}

export default App
