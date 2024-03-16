import './reseña.css'
import { useState } from 'react'
export function Reseña() {
    const [reseñas, setReseñas] = useState([]);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaReseña = { name, review };
        setReseñas([...reseñas, nuevaReseña]);
        setName('');
        setReview('');
    }

    const handleEliminarReseña = (index) => {
        const nuevasReseñas = [...reseñas];
        nuevasReseñas.splice(index, 1);
        setReseñas(nuevasReseñas);
    }

    const isFormValid = name.trim() !== '' && review.trim() !== '';

    return (
        <div className='card-reseñas-content'>
            <form onSubmit={handleSubmit} className='cuestionario-reseñas'>
                <input
                    className='autor-name'
                    type="text"
                    placeholder='Your name...'
                    maxLength={20}
                    minLength={4}
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    placeholder='Reviews...'
                    maxLength={60}
                    value={review}
                    onChange={handleReviewChange}
                />
                <input
                    type="submit"
                    value='SEND'
                    className='input-submit-reseñas'
                    disabled={!isFormValid}
                />
            </form>
            <div className='contenedor-reseñas-creadas'>
                {reseñas.map((res, index) => (
                    <div key={index} className='item-card'>
                        <div className='superior-reseña'>
                            <img src=".././img/estrellas.png" alt="estrellas" />
                            <p className='close' onClick={() => handleEliminarReseña(index)}>X</p>
                        </div>
                        <div className='contenido-reseñas'>
                            <p>{res.review}</p>
                        </div>
                        <div className='autor-reseñas'>
                            <p>{res.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}