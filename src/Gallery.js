// src/Gallery.js
import React, { useState,useEffect} from 'react';

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import './gallery.css'
import { Slide,  Zoom } from '@mui/material';

import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img7 from './img/img7.png'
import img8 from './img/img8.png'
import cGIF from './img/cinamorollDance.gif'
import cStill from './img/cinStill.png'
import skel from './img/songName.mp3'

import HVW from './img/HVW.png'
const Gallery = () => {
   const [text, setText] = useState("");
  const [anchor, setAnchor] = React.useState(null);
  const [currentStyle, setCurrentStyle] = useState('slider');
  const getImg = (imgSrc) =>{
    console.warn(imgSrc)
  }
  
  const toggleStyle =  (event, index) => {
    switch (index) {
    case 1:
      setText("10/05/2025: El día que nos conocimos en persona, estabas tan hermosa y yo tan nervioso, aprendimos de counter y lol, jugamos cartitas y te robé un piquito :3 (auqnue no saliera bien uu). Desde que te vi me pareciste hermosa, y estaba tan nervioso si no sabía si iba a poder ser yo mismo, con mucho temor de dar una mala impresión hablaba lo primero que pensaba y terminé contandote cosas como lo del brownie y demás (ay erick xd), de verdad agradezco a mi hermana por ayudarme a romper el hielo y tener uno de nuestras primeras inside joke (Quienes somos para juzgar 🤷‍♂️ 😂). Me alegra que todo haya resultado bien y haya podido darte la impresión de que soy tierno y bonito :3, no sabes la alegría que me dio leer tus palabras. Un primer contacto exitoso wiii");
      break;
    case 2:
      setText("17/05/2025: El día en que te arriesgaste y te abriste a mí, expresándome tus pensamientos, sentimientos, y eligiéndome 🥹. Y, el día en que supe que serías el amor de mi vida ❤️. Agradezco mucho por tu decisión, por arriesgarte conmigo amorcito; prometo siempr eestar a tu lado y hacerte sentir que fue la mejor decisión dandote muchísimo amor (el cual me nace sin forzar y me encanta por que te adoro con todo mi ser), y creciendo juntos por la vida. Sabes que puedes siempre contar conmigo para todo lo que desees mi corazoncito 😚😚😚.");
      break;
    case 3:
      setText("21/05/2025: Una salidita inesperada ^_^, caminamos hasta Plaza norte ,comimos nuestra primera pizza juntos 🍕 y contamos sobre nuestro pasado. Por más salidas espontáneas solo porque no aguantamos las ganas de vernos ;). En este día aprendí también de las cosas que te hacen mal y me comprometí a ser parte de tu cuidado en cuanto a no hacer desarreglos en tus comiditas y con tu estomaguito. Quiero cuidarte para que me dures toda la vida mi panquecito");
      break;
    case 4:
      setText("23/05/2025: Mi día favorito, el día en que nos sorprendimos con regalos hechos en secreto mutuamente; donde me afirmaba el pensamiento de que sentimos el mismo inmenso amor por el otro. Y también, el día que te pedí que seas mi novia 💐. Me encanta esa foto porque me hace fantasear cuando vivamos juntos como parejita adulta 🏠; es uno de mis sueños a tu lado que cuampliremos y seremos muy felices juntitos 💍");
      break;
    case 5:
      setText("31/05/2025: De nuestras primeras salidas como novios 😊. Ese día compramos en metro, fuimos al cine donde te daba caricias y engreí mucho, y luego cenamos junto a mi mami y mis tías. Todo el día fue hermoso y especial, fue un perfecto hasta luego justo antes de mi viaje a Cusco. Esta es una de mis fotos favoritas, nuestro fondo de pantalla :3");
      break;
    case 6:
      setText("23/06/2025: Nuestro primer mesiversario!! 💓. Yo amé este día, lleno de regalitos, cartitas y sorpresas 💌 (tanto que hasta lagrimitas hubo). De verdad te pasaste fueron unos regalazos desde la gaia de juguete hasta el cuadro de nosotros 🖼️. Atesoro y recuerdo La emoción de sentarnos un momento a ver tus primeras cartas y pensar en todo lo que habiamos vivido hasta el momento, un mágico día que recordaré siempre. También el día en que te di el polerón el cual me encanta saber que te gusta y te sirve mucho! 🧥");
      break;
    case 7:
      setText("05/07/2025: El inicio de un fin de semana de aventuras junto al amor de mi vida y mejores amigos. Fuimos a bailar 🪩, conociste a mis amiguitos 👥, salimos con Nelson , Stephanie y Xavi; y sobre todo pasamos tres días seguidos juntitos 🥹. Esta foto la tomó nathy, asi desapercibida y natural, me gusta mucho porque para mí representa nuestros momentos de cariño que nos damos en cada oportunidad que tenemos :3, y la forma en que los demás nos ven. Estoy muy agradecido por ese día bebita, porque sentí tu amor, tu apoyo y pude compartir contigo mi felicidad lo cual quiero hacer durante el resto de mi vida. Te quiero siempre en todos mis momentos , porque si estás tú cada uno de ellos ya será perfecto");
      break;
      
    case 8:
      setText("18/07/2025: Ay amorcito, que te puedo decir, cada parte de este día fue maravilloso. Te llevé a comer uno de tus platos favoritos a Elia, pude cuidarte de tus colicos comprandote tu pastillita y tu bolsita de agua caliente; fuimos al cine donde estuviste cómoda con el pijamita que escogí para ti y terminamos la noche brindando, bailando y durmiendo acurrucaditos hasta el día siguiente; para mí la cita perfecta 💕. Verte feliz comiendo rico, ver tu expresión de alivio cuando sentiste la bolsita caliente, tu alegría al darte tu vasito de chimuelo, bañarnos en el jacuzzi juntos, y demás momentos donde sentí que estabas alegre ,relajada y feliz, son los momentos que me motivan a seguir adelante y seguir creciendo para darte todo. Tú te mereces todo lo bonito de este mundo y yo quiero dártelo, porque eres mi universo y a mí me haces sentir que lo tengo todo, que soy la persona más afortunada del mundo y que contigo a mi lado no neceisto nada más. Te amo muchísimo amor y espero te hayan gustado los momentos que elegí y como me siento con ellos.");
      break;
    default:
      setText("Te amo mucho mi cielito hermosa, todo ha sido perfecto desde que te conocí");
  }

    
    setAnchor(anchor ? null : event.currentTarget);
    setCurrentStyle(currentStyle === 'slider' ? 'sliderPause' : 'slider');
  };
  const handleClick = (event) => {
    
  };
  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;


  const customStyle = (i) => {
    return {
      '--i': i,
      // Add more custom properties if needed
    };
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
  };
  const [isZoomed, setIsZoomed] = useState(false);

 
  useEffect(() => {
    let timeoutId;
    if (isZoomed) {
      timeoutId = setTimeout(() => {
        setIsZoomed(!isZoomed);
      }, 200); // Adjust the duration as needed (in milliseconds)
    }
    return () => clearTimeout(timeoutId);
  }, [isZoomed]);
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsHorizontal(window.innerWidth > window.innerHeight);
    };

    // Initial check
    checkOrientation();

    // Listen for resize events to update orientation
    window.addEventListener('resize', checkOrientation);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);
  return (
    <>
   
    <div style = {{marginLeft :isHorizontal ? "10vw": "10vw", marginTop: "-16vh"}}>     
      <div style = {{ marginLeft :isHorizontal ? "7vw": "4vw",  marginBottom:"5vh"}}>
        <img  style = {{ height:isHorizontal ? "60%": "80%", width: isHorizontal ? "60%": "80%"}} 
        className={isZoomed ? 'zoomed' : 'notzoomed'}  
        src = {HVW} alt = "" /> 
      </div>
   
    <div style = {{position: "relative",zIndex: 1, marginLeft: "15vw", display: "flex"}} className={currentStyle} >
    <BasePopup id={id} open={open} anchor={anchor}>
        <PopupBody>{text}</PopupBody>
      </BasePopup>      
      <span style = {customStyle(1)}> <img className="zoom" src = {img1} alt = "" onClick={(e) => toggleStyle(e, 1)} /> </span>
      <span style = {customStyle(2)}> <img className="zoom" src = {img2} alt = "" onClick={(e) => toggleStyle(e, 2)}/> </span>
      <span style = {customStyle(3)}> <img className="zoom" src = {img3} alt = "" onClick={(e) => toggleStyle(e, 3)}/> </span>
      <span style = {customStyle(4)}> <img className="zoom" src = {img4} alt = "" onClick={(e) => toggleStyle(e, 4)}/> </span>
      <span style = {customStyle(5)}> <img className="zoom" src = {img5} alt = "" onClick={(e) => toggleStyle(e, 5)}/> </span>
      <span style = {customStyle(6)}> <img className="zoom" src = {img6} alt = "" onClick={(e) => toggleStyle(e, 6)}/> </span>
      <span style = {customStyle(7)}> <img className="zoom" src = {img7} alt = "" onClick={(e) => toggleStyle(e, 7)}/> </span>
      <span style = {customStyle(8)}> <img className="zoom" src = {img8} alt = "" onClick={(e) => toggleStyle(e, 8)}/> </span>
      
    </div >
  
    <div   style = {{position: "relative", zIndex: 2, bottom:0,marginBottom:"-9vh", marginLeft :"-5vw", marginTop: "30vh",display: "flex"}}>
       
    <Slide direction='out' in={currentStyle == 'slider'} mountOnEnter unmountOnExit >
     
      <img onClick={togglePlayback}  
       className= {!isPlaying? 'onScene' : ''} 
       style = {{ height: isHorizontal ? "40%" : "70%" , width: isHorizontal ? "40%" : "70%",  display: "flex",marginBottom: isHorizontal ? "0%": "-6%" ,marginTop: isHorizontal ? "-26%":"-45%",marginLeft : isHorizontal ?"22%": "8vw"}} 
       src = {isPlaying? cGIF : cStill} alt = "Animated GIF"/>
       </Slide>
    
    </div>
  </div>
  <audio ref={audioRef} loop>
        
    <source src= {skel} type="audio/mpeg" />
        
  </audio>
   
    </>
  );
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const PopupBody = styled('div')(
    
    ({ theme }) => `
    width: ${window.innerWidth > window.innerHeight? '50vw' : '85vw'};
    
    padding: 5px 5px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#f1e2f1'};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'DM Sans', sans-serif;
    font-size: ${window.innerWidth > window.innerHeight? '1vw' : '1vh'};
    z-index: 1;
  `,
  );
  
  const Button = styled('button')(
    ({ theme }) => `
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${blue[500]};
    box-shadow: 0 2px 1px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &:active {
      background-color: ${blue[700]};
      box-shadow: none;
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
      &:hover {
        background-color: ${blue[500]};
      }
    }
  `,
  );

export default Gallery;
