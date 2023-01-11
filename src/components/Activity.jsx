import React from 'react';
import '../styles/Activity.scss';

const Activity = ({activity}) =>{
    return(
        <div className='activityCard'>
            <p className='activityTitle'>{activity.activity}</p>
            <p className='activityDescription'>{activity.description}</p>
            <p className='activityLevel'>Intensity: {activity.intensityLevel}</p>
        </div>
    ) 
};

export {Activity};