//Cedric IRADUKUNDA SANGWA
import React, {useState} from "react";
const FormSubmition = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //perform form submission logic, e.g. send data to API
    };
    return (
        <div>
            <h2>Form Submition</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default FormSubmition;