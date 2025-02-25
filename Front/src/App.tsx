
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
        <p className='comment'>Visiting the hotel was a blast, would recommend 100%</p></div>
        <div className='row1'>
        <img className="customer1"  src={HappyCustomer3} alt="" />
        <p className='comment'>Food was amazing. If you can get the hotel food option</p></div>
      </div>
      <div className='column2'>
        <div className='row1'>
        <img className="customer2"  src={HappyCustomer2} alt="" />
        <p className='comment'>Good beds and breakfast waits until you wake up</p></div>
        <div className='row1'>
        <img className="customer2"  src={HappyCustomer4} alt="" />
        <p className='comment'>Good activities to spend time on during visits</p></div>
      </div>
      
      </div>
      
      
    </div>
  )
}

export default App
