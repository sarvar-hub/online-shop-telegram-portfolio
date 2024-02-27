import { useEffect } from 'react';
import '@/App.css'
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="flex flex-wrap">
      <h1 className="text-3xl font-bold underline mr-5">Hello World with TailwindCSS</h1>
      <button className="bg-green-500 text-white px-2 py-1" onClick={onClose}>Закрый</button>
    </div>
  )
}

export default App
