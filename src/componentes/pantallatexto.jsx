import './pantallatexto.css'
export function Pantallatexto({ titulo, subtitulo, descripcion, link }) {
    return (
        <section className='contenedor-banner-texto'>
            <div className='contenido'>
                <h3 className='titulo-banner-texto'>{titulo}</h3>
                <h4 className='subtitulo-banner-texto'>{subtitulo}</h4>
                <p className='descripcion-banner-texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, praesentium, ut officiis porro expedita quas iusto corporis, aliquid saepe accusantium fugit ab excepturi cum! Ex voluptatum nihil veritatis repellat harum.</p>
                <a href="#" className='link-banner-texto'>{link}</a>
            </div>
        </section>
    )
}