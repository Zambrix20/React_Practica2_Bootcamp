import React from 'react'

export default function CardCategorie(props) {

    const { image, title, viewers, newCategorie } = props

    let classnames = 'card-categorie'
    if (newCategorie) {
        classnames += ' new'
    }

    return (
        <article className={classnames}>
            <div className='category-img'>
                <img src={image} alt='categorie' />
                {
                    newCategorie && <span className='new-categorie'>NUEVO</span>
                }
            </div>
            <div className='card-categorie__info'>
                <h3 className='card-categorie-title'>{title}</h3>
                <span className='category-info-color'>{viewers} espectadores</span>
            </div>
        </article>
    )
}
