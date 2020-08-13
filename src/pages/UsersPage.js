import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';
import {UserPreview} from '../components/UserPreview';

const UsersPages = ({dispatch, data, loading, hasErrors})=>{
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    const renderUsers = () =>{
        console.log(data.length)
        if (loading) return <p>Loading users...</p>;
        if  (hasErrors) return <p>Unable to display users.</p>;
        return data.length>0?data[0].map((currentData,index)=><UserPreview key={index} data={{parentData:{data},currentID:index}} />):<p>Still loading..</p>;
    }

    return(
        <section>
            <h1>Users</h1><br />
            {renderUsers()}
        </section>
    );
};

const mapStateToProps = state =>({
    data: state.usersDataSet.data,
    loading: state.usersDataSet.loading,
    hasErrors: state.usersDataSet.hasErrors
})
export default connect(mapStateToProps)(UsersPages);