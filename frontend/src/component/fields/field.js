import React from 'react'
import './container.css'

const Field = (props)=>{
    return(
        <div>
            <p>This is a Field</p>
            <p>{props.fieldName}</p>
        </div>
    )
}
export default Field