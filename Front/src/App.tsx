
import { HappyCustomer1,HappyCustomer2,HappyCustomer3, HappyCustomer4 } from './assets/assetsHolder'
import './App.css'
import { useTranslation } from 'react-i18next'



function App() {
  const {t} = useTranslation();

  return (
    <div >
      <h1 className='title'>{t("Happy Customers")}</h1>
      <br />
      <div className='app'>
      <div className='column1'>
        <div className='row1'>
        <img className="customer1"  src={HappyCustomer1} alt="" />
        <p className='comment'>Visiting hotel was a blast and would recommend</p></div>
        <div className='row1'>
        <img className="customer1"  src={HappyCustomer3} alt="" />
        <p className='comment'>Food was amazing totally recommend the hotel food</p></div>
      </div>
      <div className='column2'>
        <div className='row1'>
        <img className="customer2"  src={HappyCustomer2} alt="" />
        <p className='comment'>Good beds and brekfast waits untill you wake up</p></div>
        <div className='row1'>
        <img className="customer2"  src={HappyCustomer4} alt="" />
        <p className='comment'>Good activities to spend time on during visits</p></div>
      </div>
      
      </div>
      
      
    </div>
  )
}

export default App
