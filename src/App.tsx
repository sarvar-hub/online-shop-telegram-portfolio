import { useEffect } from 'react';
import './App.css'
const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=> {
    tg.ready(); 
  }, [])

  const onClose = () => {
    tg.close();
  }
  
  return (
    <>
      <h1 style={{color: 'green'}}>Hello World with TailwindCSS</h1>
      <button onClick={onClose}>Закрый</button>
    </>
  )
}

export default App
