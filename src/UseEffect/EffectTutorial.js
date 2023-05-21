import React, { useEffect, useState } from "react";
//here we call API 
import axios from "axios";

function EffectTutorial() 
{
 //we want to display email data on screen of 1st obj
 //data is 500 elem 
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => 
 { //axios call api typicode and then what ever it return it show 500 objects
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        //it is called twice bec when page renders useEffect is called and then we change the value of state like here is data but if u want call once then pass empty array 
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
