import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetup from '../components/meetups/NewMeetup';

function NewMeetupPage() {
    const navigate= useNavigate();
    function addNewMeetup(meetup) {
        fetch('https://react-getting-started-5acf3-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetup),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigate('/');
            });
    }

    return <div>
        <h1>Add New Meetup:</h1>
        <NewMeetup addNewMeetup={addNewMeetup} />
    </div>
}
export default NewMeetupPage;