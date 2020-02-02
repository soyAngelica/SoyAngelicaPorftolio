  
import React, {PureComponent} from 'react'

export default class LanguagePicker extends PureComponent {
    render(){
        const {changeLanguage} = this.props
        return (
            <div className="langPick">
                <button id="en" onClick={changeLanguage}>EN</button>|
                <button id="es" onClick={changeLanguage}> ES</button>
            </div>
        )
    }
}