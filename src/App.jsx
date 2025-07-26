import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players';

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
      <main className='max-w-11/12 mx-auto'>
        <Players></Players>
      </main>
    </>
  )
}

export default App
