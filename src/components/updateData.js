import React,{useState} from "react";
import axios, { Axios } from "axios";
const UpdateData = () => {
    const [data, setData] = useState([]);
    const handleUpdate = async () => {
        try{
            await axios.put('https://api.example.com/data/1', {UpdateData});
            alert('Data updated successfully');

        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    return (
        <div>
            <h2>Update Data</h2>
            <input
            type="text"
            value={UpdateData}
            onChange={(e) => setUpdateData(e.target.value)}
            />
            <button onClick={handleUpdate}>Update Data</button>
        </div>
    );
};
export default UpdateData;