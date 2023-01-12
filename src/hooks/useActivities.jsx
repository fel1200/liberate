import React from 'react';
import {useGetActivities} from '../hooks/useGetActivities'

function useActivities() {
    
    console.log("useactivities");
     let [loading, setLoading] = React.useState(true);
     let [errorLoading, setErrorLoading] = React.useState(false);
     let [totalActivities, setTotalActivities] = React.useState([]);
     const [searchedActivities, setSearchedActivities] = React.useState([]);
     const [searchValue, setSearchValue] = React.useState('');
    // let searchedActivities = [];
     const [totalActivitiesG, errorLoadingG, loadingG] = useGetActivities();
     //setLoading(loadingG);
     loading = loadingG;
     totalActivities = totalActivitiesG;
     errorLoading = errorLoadingG;
    console.log("TotalActivities",totalActivities)
    // if (!searchValue.lenght >= 1 ){
    //     //searchedActivities = totalActivities;
    //     //setSearchedActivities(totalActivities);
    // }else{
    //     searchedActivities = totalActivities.filter(activity =>{
    //         const activityText = activity.activity.toLowerCase();
    //         const activityDescriptionText = activity.description.toLowerCase();
    //         const searchedText = searchValue.toLowerCase();
    //         if (activityText.includes(searchedText) || 
    //         activityDescriptionText.includes(searchedText)){
    //             return true;
    //         }
    //     });
    // }

    return {
         loading,
         setLoading,
         errorLoading,
         totalActivities,
         setTotalActivities,
         searchedActivities,
         setSearchedActivities,
         searchValue,
         setSearchValue,

    };
};

export {useActivities};