import React from 'react'
import _default from 'react-bootstrap/esm/Modal'
import './container.css'

const Container = (props)=>{
    return(
        <div>
            <p>This is a Container</p>
            <p>{props.fieldName}</p>
        </div>
    )
}
export default Container