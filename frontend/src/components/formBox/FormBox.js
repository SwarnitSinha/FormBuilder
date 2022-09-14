import React from 'react'
import Container from '../fields/Container'
import Field from '../fields/field'
const FormBox = (props)=>{
    console.log("this : ",props.data)
    
    
    return(
        <div className='fields'>
            <p>No field Exist</p>
            {
                props.data.map(
                    (form)=>{
                        
                        const isField = form.itemType
                        console.log("form box field name ", form.fieldName)
                        console.log("form box entry name ", form.entryName)
                        return(
                            <div>
                                {isField==1?
                                    <Field
                                        fieldName = {form.fieldName}
                                        fieldId = {form.fieldId}
                                        entryName = {form.entryName}
                                        plural = {form.plural}
                                    />
                                    :
                                    <Container
                                        fieldName = {form.fieldName}
                                        fieldId = {form.fieldId}
                                        entryName = {form.entryName}
                                        plural = {form.plural}
                                    />
                                }
                                
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default FormBox