import React from 'react'
import CardCategorie from './CardCategorie'

export default function Categories() {
    return (
        <main className='categories-container'>
            <div className="header-categories">
                <h2>Categorias</h2>
            </div>
            <div className='category-container'>
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/509658-144x192.jpg' title='Charlando' viewers='562230' newCategorie />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/33214-144x192.jpg' title='Fortnite' viewers='235797' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/509663-144x192.jpg' title='Eventos especiales' viewers='130909' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/21779-144x192.jpg' title='League of Legends' viewers='152300' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/512710-144x192.jpg' title='Call of Duty: Warzone' viewers='108640' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg' title='Minecraft' viewers='68657' newCategorie />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/516575-144x192.jpg' title='VALORANT' viewers='71481' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/2085980140_IGDB-144x192.jpg' title='Lethal Company' viewers='56760' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-144x192.jpg' title='Rust' viewers='231799' />
                <CardCategorie image='https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-144x192.jpg' title='Genshin Impact' viewers='10646' newCategorie />
            </div>
        </main>

    )
}
