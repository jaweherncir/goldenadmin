import React, { Component } from 'react'
import Menu from '../../Template/Menu'
import Header from '../../Template/Header'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export default function BdUserInscrit (){
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch(
        
          'https://golden-indigo.herokuapp.com/api/user',{mode:'cors'});
        
           const data = await response.json();
          console.log({data})
          //use only 3 sample data
          setUsers( data )
       
      
       
    }
  
    // Call the function
    fetchData();
 }, []);


    return (


      <center>
             <Header/>
        <Menu/>
      <div style={{marginLeft:270,alignItems:'center'}}>
        {/* TABLE: LATEST ORDERS */}
        <div >
        <div className="card-header border-transparent">
          <h3 className="card-title">Latest Orders</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
              <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table m-0">
              <thead>
                <tr >
                  <th>Pseudo </th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Mail</th>
                  <th>Numéro</th>
                  <th>villeconnue</th>
                 
                  <th> date d'inscrit</th>
                  <th>Historique message</th>
                  <th>Document CIN</th>
                  <th>Statut </th>
                  <th>Photo certif</th>
              
                </tr>
              </thead>
              <tbody>
              { 
         users.map( (user,key) =>
         <tr key={key}>
         
          
                  <td>{user.pseudo}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>
                   {user.email}
                  </td>
                  <td>{user.numero}</td>
           
                  <td key={key}>{user.villeconnue[0]} , {user.villeconnue[1]}</td>
              
                  <td>
                {user.createdAt}
                  </td>
                  <td>
                    <Link to={ `/HistoriqueMessage/${user._id}`}>
                    
                    <span className="badge badge-success">message</span>
                    </Link>
                 
                    
                   
                    </td>
                  <td> <a href='#myModal'data-toggle="modal">Show</a></td>
                  <td>
                  <span className="badge badge-success">Hor ligne</span>
                  </td>
                  <td> <a href='#myModal1'data-toggle="modal">Show</a></td>
              
                </tr>
            
            )
          }
                

     
              </tbody>
            </table>
          </div>
          {/* /.table-responsive */}
        </div>
        {/* /.card-body */}
       
        {/* /.card-footer */}
      </div>
      {/* /.card */}
      </div>
{/* Modal HTML cin */}
<div id="myModal" className="modal fade">
  <div className="modal-dialog modal-confirm">
    <div className="modal-content">
      <div className="modal-header">
        <div className="icon-box">
          <i className="material-icons"></i>
        </div>				
        <h4 className="modal-title w-100">Carte Cin</h4>	
      </div>
      <div className="modal-body" >
      <p className="text-center">
        <div className="row" style={{alignItems:'center',marginLeft:100,flexDirection: 'row',display:'flex'}}>
            <di> <img src='../../../dist/img/logo.jpeg' style={{width:100,height:100,}}/> </di><br/>
            <di> <img src='../../../dist/img/logo.jpeg' style={{width:100,height:100}}/> </di>
     
        </div>
        </p>
      
      </div>
      <div className="modal-footer">
        <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
{/* Modal HTML certif */}
<div id="myModal1" className="modal fade">
  <div className="modal-dialog modal-confirm">
    <div className="modal-content">
      <div className="modal-header">
        <div className="icon-box">
          <i className="material-icons"></i>
        </div>				
        <h4 className="modal-title w-100">Cértification!</h4>	
      </div>
      <div className="modal-body">
        <p className="text-center"><img src='../../../dist/img/logo.jpeg' style={{width:100,height:100}}/></p>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
 
  </center>
 
    
    )
  }

