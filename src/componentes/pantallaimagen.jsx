import './pantallaimagen.css'
export function Pantallaimagen({ seccion, clase }) {
    return (
        <section className='contenedor-banner-imagen'>

            <h2>{seccion}</h2>
            <h3>{clase}</h3>

        </section>
    )
}