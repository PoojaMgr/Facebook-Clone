import React from 'react';
import './Widgets.css';
import Avatar from '@material-ui/core/Avatar';

export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__section">
                <h3>Your Pages</h3>
                <div className="widgets__option">
                <Avatar/>
                <p>NEw Pinch</p>
                </div>
            </div>
            <div className="widgets__section">
                <h3>Friend requests</h3>
                <div className="widgets__option">
                <Avatar/>
                <p>Ritu Diwakar</p>
                <button>Confirm</button>
                <button>Delete</button>
                </div>
            </div>
            <div className="widgets__section">
                <h3>Birthdays</h3>
                <div className="widgets__option">
                 <p> <b>Krishna Chhetri's</b> birthday is today</p>
                </div>
            </div>
            <div className="widgets__section">
                <h3>Contacts</h3>
                <div className="widgets__option">
                    <Avatar/>
                    <p>Prinsa Thapa Magar</p>
                </div>
            </div>
        </div>
    )
}
