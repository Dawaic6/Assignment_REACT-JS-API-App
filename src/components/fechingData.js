//Cedric IRADUKUNDA SANGWA
const[catched, setCatchedData] = useState(null);
const fetchData = async () => {
    try {
        if (catchedData){
            //Use cached dataif avilable 
            return;
        }
        const response = await axios.get('https://api.example.com/data');
        setCatchedData(response.data);
        // Handle the response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};