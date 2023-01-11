import React from 'react';
import {useGetActivities} from '../hooks/useGetActivities.js';
import { Activity } from '../components/Activity.jsx';
import {useActivities} from '../hooks/useActivities';
import '../styles/ActivitiesSection.scss';

const ActivitiesSection = () =>{
    
    //const {totalActivities, errorLoading, loading} = useActivities();
    const [totalActivities, errorLoading, loading] = useGetActivities();
    //useGetActivities();
    console.log(totalActivities);
    return(
        <>
            <div className='activitiesSection'>
            {
               loading && <p>Loading...</p>
            }
            { errorLoading && <p className="errMsg">{errorLoading}</p>}
            { !loading && !errorLoading && 
            Array.from(totalActivities.data).map( activity => 
            <Activity key={activity._id} 
                activity={activity}/>)
            }
            

        </div>

        </>
        
    );
};

export {ActivitiesSection};