import React from 'react'
import CardFeaturesItem from './CardFeatureItem'

export default function HomeFeatures() {
    return (
        <div className='container-features'>
            <div className='main-container-feature'>
                <section className='items'>
                    <CardFeaturesItem icon='💡' title='Instant Server Start' paragraph='On demand file serving over native ESM, no bundling required!' />
                    <CardFeaturesItem icon='⚡️' title='Lightning Fast HMR' paragraph='Hot Module Replacement (HMR) that stays fast regardless of app size.' />
                    <CardFeaturesItem icon='🛠️' title='Rich Features' paragraph='Out-of-the-box support for TypeScript, JSX, CSS and more.' />
                    <CardFeaturesItem icon='📦' title='Optimized Build' paragraph='Pre-configured Rollup build with multi-page and library mode support.' />
                    <CardFeaturesItem icon='🔩' title='Universal Plugins' paragraph='Rollup-superset plugin interface shared between dev and build.' />
                    <CardFeaturesItem icon='🔑' title='Fully Typed APIs' paragraph='Flexible programmatic APIs with full TypeScript typing.' />
                </section>
            </div>
        </div>
    )
}
