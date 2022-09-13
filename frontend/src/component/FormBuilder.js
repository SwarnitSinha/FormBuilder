import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './FormBuilder.css'
  

const FormBuilder = ({openModal,setOpenModal,formData})=>{

    const [type,setType] = new useState(0)
    const [plural,setPlural] = new useState(1)

    const [fieldName,setFieldName] = new useState("")
    const [fieldId,setFieldId] = new useState("")
    const [entryName,setEntryName] = new useState("")
    // const

    const saveField = (event)=>{
        const field = {
            itemType:type,
            fieldName : fieldName,
            fieldId:fieldId,
            plural:plural
        }
        formData(field)
        console.log(field)
    }

    return(
        <div>
            <Modal

                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show = {openModal}
                onHide = {()=> setOpenModal(false)}
                
            >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
        New form item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">

            <div className='item-type'>
                
                <label >Item type: </label> 

                <div>

                    <Form.Check 
                        type="checkbox" 
                        label="Container" 
                        checked = {type===0}
                        onClick = {()=>setType(0)}
                    />


                    <Form.Check 
                        type="checkbox" 
                        label="Field" 
                        checked = {type===1}
                        onClick = {()=>setType(1)}
                    />
                </div>
            </div>

            <div className='item-type'>
                <label >Field name: </label> 
                
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {fieldName}
                    onChange={(e)=>{setFieldName(e.target.value)}}
                />
            </div>

            <div className='item-type'>
                <label >Field id: </label> 
                
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {fieldId}
                    onChange={(e)=>{setFieldId(e.target.value)}}
                />
            </div>

            <div className='item-type'>
                <label >Is plural field: </label> 
                <div>
                    <Form.Check 
                        type="checkbox" 
                        label="Yes" 
                        checked = {plural===0}
                        onClick = {()=>setPlural(0)}
                    />


                    <Form.Check 
                        type="checkbox" 
                        label="No" 
                        checked = {plural===1}
                        onClick = {()=>setPlural(1)}
                    />
                </div>
            </div>
            {plural===0 && 
                <div className='item-type'>
                    <label >Entry name: </label> 
                    
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value = {entryName}
                        onChange={(e)=>{setEntryName(e.target.value)}}
                    />
                </div>
            }

        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveField}>Save</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default FormBuilder