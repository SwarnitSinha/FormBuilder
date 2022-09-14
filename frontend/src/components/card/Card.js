import React from 'react'
import './card.css'

const Card =(props)=> {

	console.log(props.title+" is "+ props.plural)

  return (
	
    <div className='cards'>
		
		{props.plural==1 && 
				<div className='head'>
					<p>{props.title}</p>
				</div>
		}
        <div className='single-field'>
			<p>{props.plural===1?props.entryName:props.title} :</p>
			<input className='box'/>
        </div>
        
    </div>
  )
}

export default Card