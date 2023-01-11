import React from 'react';

function useActivities() {
    
    const [loading, setLoading] = React.useState(true);
    const [errorLoading, setErrorLoading] = React.useState(false);
    const [totalActivities, setTotalActivities] = React.useState([]);
    //const [searchedActivities, setSearchedActivities] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    let searchedActivities = [];
    if (!searchValue.lenght >= 1 ){
        searchedActivities = totalActivities;
        //setSearchedActivities(totalActivities);
    }else{
        searchedActivities = totalActivities.filter(activity =>{
            const activityText = activity.activity.toLowerCase();
            const activityDescriptionText = activity.description.toLowerCase();
            const searchedText = searchValue.toLowerCase();
            if (activityText.includes(searchedText) || 
            activityDescriptionText.includes(searchedText)){
                return true;
            }
        });
    }

    return {
        loading,
        setLoading,
        errorLoading,
        totalActivities,
        setTotalActivities,
        searchedActivities,
        searchValue,
        setSearchValue,

    };
};

export {useActivities};