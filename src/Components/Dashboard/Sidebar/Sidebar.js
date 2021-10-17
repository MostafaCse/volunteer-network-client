import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div>
             <div>
           <Link style={{textDecoration:'none'}} to="/Dashboard"><p><FontAwesomeIcon style={{marginRight:'2%'}} icon={faUserFriends}/>Volunteer register list</p></Link>
           <Link style={{textDecoration:'none',color:'black'}} to="/AddEvent"><FontAwesomeIcon style={{marginRight:'1%'}} icon={faPlus}/> Add event</Link>
        </div>
        </div>
    );
};

export default Sidebar;