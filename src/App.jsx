import styles from './App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import AboutMe from './components/AboutMe/Aboutme';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  return (
   <div className={styles.app}>
    <BrowserRouter>
     <Header/>
     <Routes>
			  <Route exact path="/" element={<MainPage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/*" element={<ErrorPage/>} />
		  </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
