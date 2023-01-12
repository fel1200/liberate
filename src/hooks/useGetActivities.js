import {useEffect, useState} from 'react';
import {useReducer} from '../hooks/useReducer';
//import {useActivities} from '../hooks/useActivities';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/activities',
    params: {intensitylevel: '1'},
    headers: {
      'X-RapidAPI-Key': '6dee2502aamsh0faa1eaf91cb922p126506jsnee1495e83274',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

const useGetActivities = () =>{
  
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);
  const [totalActivities, setTotalActivities] = useState([]);

    
    useEffect(() => {
        async function fetchActivities(){
        try {
          const response = await axios(options);
          setTotalActivities(response.data);
           
        } catch (error) {
          console.log("Error in axios "+error.message);          
          setErrorLoading(error.message);
        }finally{          
          setLoading(false);
        }
      }
    fetchActivities();
    }, []);
    return [totalActivities, errorLoading, loading];
};

export {useGetActivities};