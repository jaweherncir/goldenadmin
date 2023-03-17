import React, { Component } from 'react'
import Menu from '../../Template/Menu'
import Header from '../../Template/Header'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function  HistoriqueMessage (){
  const [ users, setUsers ] = useState([]);
  let routeParams = useParams();
 console.log(routeParams)
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch(
          //console.log(routeParams)
         // 'https://golden-indigo.herokuapp.com/api/user',{mode:'cors'});
        
          // const data = await response.json();
          //console.log({data})
          //use only 3 sample data
          //setUsers( data.slice( 0,13) )
        
        )
       
    }
  
    // Call the function
    fetchData();
 }, []);

    return (
      
        <center>
        <Header/>
        <Menu/>
   <div className="container" style={{marginLeft:270,alignItems:'center',marginTop:100}}>

<div className="container-fluid h-100">
  <div className="row justify-content-center h-100">
 
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
              <span className="online_icon" />
            </div>
            <div className="user_info">
              <span>user1</span>
              <p>1767 Messages</p>
            </div>
           
          </div>
          <span id="action_menu_btn"><i className="fas fa-ellipsis-v" /></span>
          <div className="action_menu">
            <ul>
              
            </ul>
          </div>
        </div>
        <div className="card-body msg_card_body">
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
            </div>
            <div className="msg_cotainer">
              Hi, how are you samim?
              <span className="msg_time">8:40 AM, Today,jaweherncir</span>
            
            </div>
           
          </div>
     
     
      
     

        </div>
    
      </div>
    </div>
  </div>
</div>




</div>
</center>
    )
  }
