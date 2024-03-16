import './banner.css'
export function Banner() {
    return (
        <header className="contenedor-banner">
            <nav className="navbar-banner">
                <a href="#" className='logo-banner'>Bakery</a>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">RESERVATION</a></li>
                    <li><a href="#">BAKERS</a></li>
                </ul>
            </nav>
            <div className='banner-txt'>
                <h1 className='title-banner'>LET'S TASTE PERFECTION</h1>
                <button className="boton-orden-now">Orden now</button>
            </div>
        </header>
    )
}