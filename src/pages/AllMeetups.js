import React from 'react';
import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import DUMMY_DATA from '../extra-files/DUMMY_DATA';

function AllMeetupsPage() {

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('https://react-getting-started-5acf3-default-rtdb.firebaseio.com/meetups.json')
            .then(response => response.json())
            .then(data => {
                const meetups= [];
                for(const key in data)
                {
                    let meetup ={
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                   
                }
                // console.log("MEETUPS", meetups);
                setLoading(false);
                setResult(meetups);
            });

    }, []);

    if (loading)
        return <div>Loading ....</div>
    else
        return <div>
            <MeetupList meetups={result} />
        </div>
}
export default AllMeetupsPage;