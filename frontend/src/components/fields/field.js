import React from 'react'
import './container.css'
import Card from '../card/Card'

const Field = (props)=>{
    console.log(props.fieldName+"this is "+props.plural)
    console.log("entry name is ",props.entryName)
    return(
        <div className='field-type'>
            
            <Card 
                title = {props.fieldName}
                type = {"field"}
                plural = {props.plural}
                entryName = {props.entryName}
            />

        </div>
    )
}
export default Field