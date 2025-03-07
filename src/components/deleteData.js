//Cedric IRADUKUNDA SANGWA
import React from "react";
import axios from "axios";
const DeleteData = () => {
    const handleDelete = async () => {
        try{
            await axios.delete('https://api.example.com/data/1');
            alert('Data deleted successfully');
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };
    return (
        <div>
            <h2>Delete Data</h2>
            <button onClick={handleDelete}>Delete Data</button>
        </div>
    );
};
export default DeleteData;