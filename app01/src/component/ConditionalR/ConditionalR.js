import React from 'react'
import ParentEditRecord from '../EditRecordWithinTable/ParentEditRecord'
import ParentEditSeparate from '../ParentEditSeparate/ParentEditSeparate'

const ConditionalR = ({isOn})=>{

    if(isOn===true){

        return(<React.Fragment>
            Setting 1
            <ParentEditRecord/>
        </React.Fragment>)
    }
    else{
        return (<React.Fragment>
            Setting 2
            <ParentEditSeparate/>
        </React.Fragment>)
    }
}

export default ConditionalR
