import React, { Component } from 'react'
import Menu from '../../Template/Menu'
import Header from '../../Template/Header'
import { useEffect, useState } from "react";
export default function BdUserInscrit (){
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch(
        
          'https://golden-indigo.herokuapp.com/api/user',{mode:'cors'});
        
           const data = await response.json();
          console.log({data})
          //use only 3 sample data
          setUsers( data.slice( 0,13) )
       
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
                <tr>
                  <th>Pseudo </th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Mail</th>
                  <th>Numéro</th>
                  <th>Ville</th>
                  <th>Pays</th>
                  <th> date d'inscrit</th>
                  <th>Historique message</th>
                  <th>Document CIN</th>
                  <th>Statut de l’abonnement</th>
                  <th>Photo certif</th>
                  <th>E-wallet</th>
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
                  <td>{user.ville}</td>
                  <td>{user.pays}</td>
                  <td>
                {user.createdAt}
                  </td>
                  <td><span className="badge badge-success">message</span></td>
                  <td> <a href=''>Show</a></td>
                  <td>
                  <span className="badge badge-success">Hor ligne</span>
                  </td>
                  <td> <a href=''>Show</a></td>
                  <td> <a href=''>Show</a></td>
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
  </center>
 
    
    )
  }

