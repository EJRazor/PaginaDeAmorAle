import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import bg from "./img/bg.jpg";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState} from 'react';

const style = {
  background: "#FFFFFF",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: ".75vh",
  boxShadow: 24,
  width: "78%",
  height: "74%",
  fontFamily: "DM Sans",
  outline: "none",
  border: 'none',
  
  
}

function App() {

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  }
  const [text] = useTypewriter({
    words: ['Holi mi amorcito Ale, Feliz mesiversario! Estoy muy feliz por cumplir un mes más a tu lado y como acordamos que tenía que ser algo hecho por nosotros y con el poco tiempo libre que he tenido; se me ocurrió intentar hacerte una mini página :3. Este detalle digital que hice con mucho cariño para ti es un carrusel que contiene fotitos de algunos de mis momentos favoritos en nuestra relación; los cuales recuerdo y atesoro con mi alma. Espero lo disfrutes amor. Te amo mucho 🐼 💖🐧'],
   
    typeSpeed: 50,
    deleteSpeed: 80,
  });
  
  return (
    <>
     
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style = {{backgroundColor: "#f1e2f1"}} sx={style}>
          
        <Button style = {{paddingTop: "5%",float: "right", color : "#000000" }} onClick={handleClick}><div>X</div></Button>
        <div  style = {{padding: "10%", color:"#5b5b5b"}}>{text}</div>
        </Box>
      </Modal>
    
    <Gallery/>
    
 
    </>
  );
}

export default App;
