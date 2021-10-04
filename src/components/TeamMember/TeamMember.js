import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import SingleService from '../SingleService/SingleService';
import './TeamMember.css'

const TeamMember = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{


        fetch('./data.json')
        .then(res=>res.json())
        .then(data=> setUsers(data))



    },[])
    return (
        <div>
            <MenuBar/>
            
           <div className="card-container">
           {
                users.map(user => <SingleService user ={user}></SingleService>)
            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default TeamMember;