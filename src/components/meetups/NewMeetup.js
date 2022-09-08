import React from 'react';
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetup.module.css';

function NewMeetup(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function handleSubmit(e) {
        e.preventDefault();
        const newMeetup = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.vale,
            description: descriptionInputRef.current.value
        };

        props.addNewMeetup(newMeetup);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" id="image" required ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5" required ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add New Meetup</button>
                </div>
            </form>
        </Card>
    )
} export default NewMeetup;