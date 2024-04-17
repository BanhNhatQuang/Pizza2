import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
function App(props) {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: "", age: "",});
  const [status, setStatus] = useState(true)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  function handleChangeInput(e) {
    let {name, value} = e.target
    setUser({...user,[name]: value})
  }
  function handleChangeAge(e) {
    setAge(e.target.value)
  }
  function handleChangeName(e) {
    // console.log("hello", e.target.value);
    setName(e.target.value)
  }
  function handleChangeStatus() {
    setStatus(!status);
  }
  function handleIncreaseCount() {
    if (count < 10) {
      setCount(count + 1)
    }
  }
  function handleChangeInfo() {
    setUser({ name: "Laurent", age: 16, bio: "Muon di ngu" });
  }
  // console.log("render component");
  console.log("thong tin user", user);
  return (
    <div className='App'>
      <Header />
      <h1>Count: {count}</h1>
      <button onClick={handleIncreaseCount}>Increase</button>
      {/* user */}
      <h1>Name: {user.name}, Age: {user.age}, Bio: {user.bio}</h1>
      {/* <button onClick={handleChangeInfo}>Increase</button> */}
      <button onClick={handleChangeInfo}>Change Info</button>
      <h2>{status == true ? <span>👱</span> : <span>🐆</span>}</h2>
      <button onClick={handleChangeStatus}>Change status</button>
      <br></br>
      <h1>Lam viec voi input: Ga cong nghiep</h1>
      <label>Enter Name: </label>
      <input type='text' name='name' placeholder='enter name' value={name} onChange={handleChangeName}></input>
      <br></br>
      <lable>Enter Age: </lable>
      <input type='number' name='age' placeholder='enter age' value={age} onChange={handleChangeAge}></input>

      <h1>Lam viec voi input: Ga choi</h1>
      <label>Enter Name: </label>
      <input type='text' name='name' placeholder='enter name' value={user.name} onChange={handleChangeInput}></input>
      <br></br>
      <lable>Enter Age: </lable>
      <input type='number' name='age' placeholder='enter age' value={user.age} onChange={handleChangeInput}></input>
      <Footer />
    </div>
  );
}

export default App;