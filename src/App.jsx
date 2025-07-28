import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players';
import Footer from './Components/Footer/Footer';
import { toast } from 'react-toastify';
import useBalance from './Components/Balance/Balance';
import { useEffect } from 'react';



function App() {

  const {balance, setBalance} = useBalance();
  useEffect(()=>{
        console.log('updated balance', balance)
      },[balance])
  

  console.log(balance)

  const handleFreeCredit = () =>{
    const money = 8000000;
    const newBalnace = balance + money;
    setBalance(newBalnace);
    toast.success('Credit Added to your Account!',{
      position: "top-center"
    })
  }



  return (
    <>
      <Header balance={balance}
      ></Header>
      <Banner handleFreeCredit={handleFreeCredit}
      
      ></Banner>
      <main className='max-w-11/12 mx-auto'>
        <Players
         balance={balance}
         setBalance={setBalance}
        ></Players>
      </main>
     
       <Footer></Footer>
       
     
    </>
  )
}

export default App
