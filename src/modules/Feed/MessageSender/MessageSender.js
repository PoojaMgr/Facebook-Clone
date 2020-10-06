import React, { useState } from 'react';
import './MessageSender.css';
import Avatar from '@material-ui/core/Avatar';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../StateManagement/StateProvider';
import firebase from "firebase";
import db from "../../../firebase";

export default function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] =  useState('');

    const handleSubmit = e =>{
        e.preventDefault(); // do not want to refesh when submit
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: "",
        })

        setInput("");
    }
    return (
        <div className="messageSender">
        <div className="messageSender__top">
            <Avatar src = {user.photoURL}/>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messageSender__input" placeholder={`What's on your mind, ${user.displayName} ?`}/>
                <button onClick={handleSubmit} type="submit">
                    Hidden Button
                </button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideoCallIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
        </div>
    )
}
