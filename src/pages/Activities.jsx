import React from 'react';
import {ActivitiesSection} from '../containers/ActivitiesSection';
import {SearchBar} from '../components/SearchBar';

import '../styles/Activities.scss';

const Activities = () => {
    return(
        <>
            <div className='main'>
                <SearchBar/>
                <div className='activitiesCards'>
                    <ActivitiesSection/>
                </div>
                <div className='footer'></div>
            </div>
        </>
    );
};

export {Activities};