import React, { useState } from 'react'
import './my.css'

function Parent({clickCheckboxP}) {

    const [isOn,isOnSet]=useState(true)

    const clickCheckbox = ()=>{

        isOnSet(!isOn)

        clickCheckboxP(isOn)
        // console.table(isOn)
    }

    return (
        <React.Fragment>
            <label class="switch">
                <input type="checkbox" onClick={clickCheckbox}/>
                <span class="slider round"></span>
            </label>
        </React.Fragment>
    )
}

export default Parent
