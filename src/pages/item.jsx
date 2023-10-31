import { useState } from 'react';

export default function Itempage() {
  const [name, setName] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState('');
  const [ordernumber, setOrderNumber] = useState(0);
  const price = 150;

  //建立訂單編號
  function makeordernumber() {
    let numbers = '0123456789';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * numbers.length);
      randomString += numbers[randomIndex];
    }
    setOrderNumber(randomString);
    console.log(ordernumber);
    return randomString;
  }

  //購買頁面
  return (
    <>
      <h1>購買商品</h1>
      <img src='src/img/choco.png' />
      <br />
      <p>
        商品名稱：星星巧克力
        <br />
        商品價格：每盒 NT${price}
        <br />
        購買數量：
       
        <input
          type='number'
          min='1'
          max='999'
          step='1'
          //購買數量只能正整數
          onInput={event => {
            const value = event.target.value;
            const intValue = parseInt(value, 10);
            if (!isNaN(intValue) && intValue > 0) {
              event.target.value = intValue;
            } else {
              event.target.value = '';
            }
          }}
          onChange={event => {
            setTotalPrice(event.target.value * price);
            console.log(totalPrice);
          }}
        />
        <br />
        商品總額：${totalPrice}
        <br />
        收件者姓名：
        <input
          type='text'
          onChange={event => {
            setName(event.target.value);
          }}
        />
        <br />
        收件地址：
        <input
          type='text'
          onChange={event => {
            setAddress(event.target.value);
          }}
        />
        <br />
        感謝您！請點選按鈕進入結帳程序！
        <br />
        <button onClick={makeordernumber}>按我結帳</button>
        <br />
      </p>
    </>
  );
}
