import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/head/Header'
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
