import React from 'react'

export default function HomeHero() {
    return (
        <div className='container-hero'>
            <div className="main-container">
                <section className='section-main'>
                    <h1>Vite</h1>
                    <p className='paragraph-first'>Next Generation Frontend Tooling</p>
                    <p className='paragraph-second'>Get ready for a development environment that can finally catch up with you.</p>
                    <div className='button-container'>
                        <div className='button-action button--color'>Get Started</div>
                        <div className='button-action'>Why Vite?</div>
                        <div className='button-action'>View on Github</div>
                        <div className='button-action button--color'>🎉ViteConf 23!</div>
                    </div>
                </section>
                <section className='section-image'>
                    <div className='image-container'>
                        <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" />
                    </div>
                </section>
            </div>
        </div>
    )
}
