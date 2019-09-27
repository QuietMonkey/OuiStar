import React from 'react'
import { translate } from 'react-polyglot'

const Logo = ({t}) => {
    return (
        <div className='logo'>
            <h1>{t('logo', )}</h1>
            <h2>{t('textLogo', )}</h2>
        </div>
    )
}

export default translate()(Logo)