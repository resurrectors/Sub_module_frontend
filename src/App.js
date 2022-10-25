import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {

  const [msg, setmsg] = useState("")

  useEffect(()=>{
    fetch("http://localhost:8080/keep_alive").then((a)=>a.json()).then((data)=>{
      console.log(data);
      setmsg(data.msg)
    })
  },[])

  return (
    <div>
      This is message from backend : {msg}
    </div>
  );
}

export default App;
