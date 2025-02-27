//Cedric IRADUKUNDA SANGWA
import React,{useState} from "react";
const ControlledComponent = () => {
    const [inputValue, setInputValue] = useState('');
   
    return (
        <div>
            <h2>Controlled Component</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p>inputValue:{inputValue}</p>
        </div>
    );
}
export default ControlledComponent;