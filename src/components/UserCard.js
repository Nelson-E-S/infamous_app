import React from 'react';
import {useLocation} from 'react-router-dom';

const UserCard = ({match}) =>{
    const {params: {userID}} = match;
    const userData = useLocation().state.parentData;
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={userData.data[1][userID-1].thumbnailUrl} alt={userData.data[0][userID-1].name} />
            <div className="card-body">
                <h5 className="card-title">{userData.data[0][userID-1].name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Username: {userData.data[0][userID-1].username}</li>
                <li className="list-group-item">Phone: {userData.data[0][userID-1].phone}</li>
                <li className="list-group-item">Works at: {userData.data[0][userID-1].company.name}</li>
            </ul>
            </div>
        </div>
    )
}

export default UserCard;