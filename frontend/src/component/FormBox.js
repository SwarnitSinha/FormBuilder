import React from 'react'

const FormBox = (props)=>{
    console.log("this : ",props.data)
    
    
    return(
        <div className='fields'>
            <p>No field Exist</p>
            {
                props.data.map(
                    (form)=>{
                        
                        const isField = form.itemType
                        console.log(isField)
                        return(
                            
                                
                                <div>
                                    {isField==1?
                                        <div>
                                            <p>This is a field</p>
                                            <p>{form.fieldName}</p> 
                                        </div>
                                        :
                                        <div>
                                            <p>This is a Container</p>
                                            <p>{form.fieldName}</p> 
                                        </div>
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