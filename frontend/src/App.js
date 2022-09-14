import './App.css';
import React,{useState,useEffect} from 'react'
import FormBuilder from './components/formBuilder/FormBuilder';
import FormBox from './components/formBox/FormBox'


function App() {

  const [openModal,setOpenModal] = new useState(false)
  const [data,setData] = new useState([{}]);
  const openModalFun = ()=>{
      setOpenModal(true);
  }

  const formData = (newFormData)=>{
		// console.log(data)
		const newData = [...data,newFormData]
		setData(newData);
  }

  return (
    <div className="App" id='yourAppElement'>
      <div className='form-box'>
        <h2>App Fields</h2>
        <FormBox data={data}/>
        <button onClick={openModalFun}>+ add Fields</button>
        <FormBuilder 
          openModal= {openModal} 
          setOpenModal = {setOpenModal} 
          formData = {formData}
        />
      
        
        
      </div>
    </div>
  );
}

export default App;
