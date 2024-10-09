 import React,{useState} from 'react';
   function CalculateBMI() {
       const[weight,setWeight]=useState('');
       const[height,setHeight]=useState('');
       const[bmi,setBMI]=useState(null);
const calculateBMI=()=>
    {
         if(weight===""||height==="")
         {
           
             alert("Please fill all the field first");
             return;
         }
         const weightAsNumber = parseFloat(weight);
    const heightAsNumber = parseFloat(height);

    if (isNaN(weightAsNumber) || isNaN(heightAsNumber)) {
      alert("Please enter valid numbers for weight and height.");
      return;
    }
        const heightInMeters=(height)/100;
   
        const bmi=weight/(heightInMeters*heightInMeters);
        setBMI(bmi.toFixed(2));
    }
         

return(
    <div className="App">
    <h1>BMI Calculator</h1>
        <br/>
        <div>
              <label>Enter your weight:</label>
    
            <input type="text" placeholder="Enter your weight" value={weight}onChange={(e) => setWeight(e.target.value)}/>
        </div>

        <br/>
    <label>Enter your weight:</label>
        <br/>
        <div>
       
    
             <input type="number" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <br/>
        <br/>

        <button onClick={calculateBMI}>Calculate BMI</button>
   
    </div>
    );
   }
export default   
 CalculateBMI;
        
