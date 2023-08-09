
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './NavBar'
import { useState } from 'react';
import { render } from "react-dom";
import { motion } from "framer-motion";
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import List from './pages/List';
import NotFoundPage from './pages/NoteFound';
function App() {
  const [moveX,setMoveX]=useState(false)
  const [moveY,setMoveY]=useState(false)
  return (
    <BrowserRouter>
    <div className="example-container">
      <NavBar/>
      <div id="page-body">
        <Routes>
          <Route path='/' element={<HomePage name='Koustubh'/>}/>
          <Route path='/about' element={<About name="Koustubh's"/>}/>
          <Route path='/articles/:articleId' element={<ArticlePage/>}/>
          <Route path='/articles' element={<List/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        
      </div>
       {/* <motion.div
        animate={{rotate:[0,200,200,0],x:[0,200,200,0]}}
        transition={{repeat: Infinity,duration:1}}>

        </motion.div> */}

      {/* <motion.div whileHover={{scale:2}}></motion.div> */}
      {/* <motion.div drag dragConstraints={{left: 50,right:50}} whileDrag={{scale:2}}></motion.div> */}
      {/* <motion.div 
      animate={{x:moveX?5:0,y:moveY?5:0}} */}
      {/* //transition={{tween:"tween",duration:2}}
      // transition={{type:"spring",bounce:3}}
      // onClick={()=>{ */}
      {/* //   setMoveX(!moveX)
      //   setMoveY(!moveY)
      // }}>

      // </motion.div> */}
      {/* <p className='example-container central-para'>This life is a mess</p> */}
      {/* <p className='example-container central-para'>Snoop what you</p> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
