import React from 'react'
import ReactDOM from 'react-dom/client'
import { Banner } from './componentes/banner'
import './main.css'
import { Pantallatexto } from './componentes/pantallatexto'
import { Pantallaimagen } from './componentes/pantallaimagen'
import { Reseña } from './componentes/reseña'
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
        <Banner />
        <div className='pantalla1-banner-item contenedor'>
            <Pantallatexto titulo="Discover" subtitulo="OUR STORY" link="LEARN MORE" />
            <div className='content-img'>
                <img src=".././img/story-img.jpg" />
            </div>
        </div>
        <div className='pantalla2-banner-con-imagen '>
            <Pantallaimagen seccion="Olways" clase="fresh" />
        </div>
        <div className='pantalla3-banner-item contenedor'>
            <div className='content-img-cuadricula-4'>
                <img src=".././img/square-1.jpg" />
                <img src=".././img/square-2.jpg" />
                <img src=".././img/square-3.jpg" />
                <img src=".././img/square-4.jpg" />
            </div>
            <Pantallatexto titulo="Explore" subtitulo="menu STORY" link="see full menu" />
        </div>
        <div className='pantalla4-banner-con-imagen'>
            <Pantallaimagen seccion="Everything" clase="tasty" />
        </div>
        <div className='pantalla5-banner-item contenedor'>
            <Pantallatexto titulo="Baker's" subtitulo="delight" link="make a reservation" />
            <div className='content-img-cuadricula-2'>
                <img src=".././img/bakers-delight-1.jpg" />
                <img src=".././img/bakers-delight-2.jpg" />
            </div>
        </div>
        <div className='pantalla-reseña-usuario'>
            <div className='contenedor-reseñas'>
                <h3>Custommer Reviews</h3>
                <div className='contenedor-reseña-cliente'>
                    <Reseña />
                </div>
            </div>
        </div>
    </>

)
