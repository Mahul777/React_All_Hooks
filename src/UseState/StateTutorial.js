import React,{useState} from 'react'
const StateTutorial = () => 
{
   //define state 
 const [inputValue,setInputValue] = useState("Peredo");
 let onChange = (event)=>
 {
    const newValue = event.target.value;
      setInputValue(newValue);
  } 
 return (
    <div>
        <input placeholder = "enter something....." onChange ={onChange}/>
         {inputValue} 
    </div>
  )
}
export default StateTutorial 
