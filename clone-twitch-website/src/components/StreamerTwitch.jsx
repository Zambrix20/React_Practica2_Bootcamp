import React from 'react'

export default function StreamerTwitch(props) {

    const { icon, name, categorie, viewers, online } = props

    let classnames = 'streamer'
    if (online) {
        classnames += ' online'
    }

    return (

        <div className={classnames}>
            <img src={icon} alt='streamer' className='streamer-img' />


            <div className='streamer-info'>
                <h3>{name}</h3>
                <span className='streamer-info-color'>{categorie}</span>
            </div>
            <div className='streamer-live'>
                {
                    online && <div className='fa-circle'></div>
                }
                <span>{viewers}</span>
            </div>
        </div>

    )
}
