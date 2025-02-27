//Cedric IRADUKUNDA SANGWA
  const [token, setToken] = useState('');const fetchData = async () => {
    try {
        const response = await axios.get('https://api.example.com/data', {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
       // Handle the response 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };
