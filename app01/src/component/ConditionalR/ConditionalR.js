import React from 'react'
import ParentEditRecord from '../EditRecordWithinTable/ParentEditRecord'

const ConditionalR = ({isOn})=>{

    if(isOn===true){

        return(<ParentEditRecord/>)
    }
    else{
        return (<h1>Setting 2</h1>)
    }
}

export default ConditionalR
