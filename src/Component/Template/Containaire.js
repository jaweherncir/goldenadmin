import React, { Component } from 'react'
import { useEffect, useState } from "react";
export default function Containaire() {
  const [ num, setNum ] = useState([]);
  const [ evenement, setEvent ] = useState([]);
  const [ duo, setDuo ] = useState([]);
  const [ post, setPost ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch(
        
          'https://golden-indigo.herokuapp.com/api/user/allusercount',{mode:'cors'});
        
           const data = await response.json();
           console.log({data})
           //use only 3 sample data
           setNum( data)
            }
       
    const fetchEvent = async () => {
  
              const evenet = await fetch(
              
                'https://golden-indigo.herokuapp.com/api/event/alleventcount',{mode:'cors'});
              
                 const evnt = await evenet.json();
                 console.log({evnt})
                 //use only 3 sample data
                 setEvent( evnt)
                  }  
    const fetchDuo= async () => {
  
                    const comptDuo = await fetch(
                    
                      'https://golden-indigo.herokuapp.com/api/event/alleventcount',{mode:'cors'});
                    
                       const duocompt = await comptDuo.json();
                       console.log({duocompt})
                       //use only 3 sample data
                       setDuo( duocompt)
                          }
    const fetchPost= async () => {
  
                            const pulication = await fetch(
                            
                              'https://golden-indigo.herokuapp.com/api/event/alleventcount',{mode:'cors'});
                            
                               const posts = await pulication.json();
                               console.log({posts})
                               //use only 3 sample data
                               setPost( posts)
                                  }                      
  
    // Call the function
    fetchData();
    fetchEvent();
    fetchDuo();
    fetchPost();
 }, []);

    return (
      <div>
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard v2</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard </li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
 
  
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <div className="col-md-8">
     
          <div className="row">
            <div className="col-md-6">


      
            </div>
            {/* /.col */}
            <div className="col-md-6">
     
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
      
        </div>
    
      </div>
      {/* /.row */}

    {/* Small boxes (Stat box) */}
    <div className="row">
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-info">
          <div className="inner">
            <h3>{num.result}</h3>
            <p>All users</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag" />
          </div>
          <a href="#" className="small-box-footer"> <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-success">
          <div className="inner">
            <h3><sup style={{fontSize: 20}}>{evenement.result}</sup></h3>
            <p>All evenement</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <a href="#" className="small-box-footer"> <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-warning">
          <div className="inner">
            <h3>{duo.result} </h3>
            <p>Compte Duo</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <a href="#" className="small-box-footer"> <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-danger">
          <div className="inner">
            <h3>{post.result} </h3>
            <p>All publication </p>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph" />
          </div>
          <a href="#" className="small-box-footer"> <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
    </div>
 


    </div>{/*/. container-fluid */}
  </section>
  {/* /.content */}
</div>

{/* /.control-sidebar */}
      </div>
    )
  }

