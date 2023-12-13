import React from 'react'

export default function CardFeaturesItem(props) {
    const { icon, title, paragraph } = props

    return (
        <article className='card-item'>
            <div className='card-icon'>{icon}</div>
            <h2 className='card-title'> {title}</h2>
            <p className='card-description'>{paragraph}</p>
        </article>
    )
}
