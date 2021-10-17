import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbarr from '../Shared/Navbarr/Navbarr';
import RegTableInfo from './RegTableInfo/RegTableInfo';
import Sidebar from './Sidebar/Sidebar';
import loadingGif from '../../Images/loading-buffering.gif';


const Dashboard = () => {
   let index=1;
   const [regInfo, setRegInfo] = useState();
   const baseUrl = 'https://murmuring-shelf-27420.herokuapp.com/regInfo';
   useEffect(() => {
      axios.get(baseUrl)
         .then(response => setRegInfo(response.data))
         .catch(err => alert(`${err}`));
   }, [])
   console.log(regInfo);
   return (
      <Container >
         <Navbarr />
         <div className="row mt-5">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
          
               {
                  regInfo ?<table class="table table-striped">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Registating date</th>
                        <th scope="col">Volunteer list</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        regInfo.map(info => <RegTableInfo info={info} index={index++} key={info._id}></RegTableInfo>)
                     }

                  </tbody>
               </table>:<div style={{textAlign:'center',marginTop:'2%'}}>
                 <img src={loadingGif} alt=""></img>
                 <h5>Loading, Please wait</h5>
               </div>
               }
            </div>
         </div>
      </Container>
   );
};

export default Dashboard;