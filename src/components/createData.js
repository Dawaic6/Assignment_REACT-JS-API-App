//Cedric IRADUKUNDA SANGWA
import React, {useState} from "react";
import axios from "axios";
const CreateData = () => {
    const [newData, setNewData] = useState('');
    const handleCreate = async () => {
        try{
            await axios.post('https://api.example.com/data', {newData});
            alert('Data created successfully');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };
    return (
        <div>
            <h2>Create Data</h2>
            <input
                type="text"
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
            />
            <button onClick={handleCreate}>create</button>
        </div>
    );
};
export default CreateData;
