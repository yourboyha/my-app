import {useState} from 'react';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import PrimeNumberCheck from "./checkPrime";

function App() {
  setInterval(UpdateTime, 1000);
  let now = new Date().toLocaleDateString('th-TH');
  const [time, setTime] = useState(now);

  const [num, setNum] = useState(0);


  function UpdateTime(){
    let newTime = new Date().toLocaleTimeString('th-TH');
    setTime(newTime);
  }

  return (
    <div>
      <MyHeader />
        <div className='My-content'>
        <div>ขณะนี้เวลา</div>
        <div>{time}</div>
        <h2>{num}</h2>
        <PrimeNumberCheck number={num} />
        <button className="button-plus" onClick={() => setNum(num + 1)}>
          เพิ่ม
        </button>
        <button className="button-minus" onClick={() => setNum(num - 1)}>
          ลด
        </button>
        <hr></hr>
        <button className="button-reset" onClick={() => setNum(0)}>
          reset
        </button>
      </div>

      <div>
        
      </div>

    <MyFooter />
    </div>
  );          
}       

export default App;
