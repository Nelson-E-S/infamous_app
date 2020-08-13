import React from 'react';
import {Link} from 'react-router-dom'

export const UserPreview = props =>{
    const {parentData} = props.data;
    const {currentID} = props.data;
    //console.log(parentData.data[0][currentID])
    return(
    <article className="user-image">
        <Link to={{
            pathname:`/user/${currentID+1}`,
            state:{parentData:parentData}
        }}>
            <img src={parentData.data[1][currentID].url} alt={parentData.data[0][currentID].name} />
        </Link>
    </article>
    );
}