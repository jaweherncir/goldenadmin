import React, { Component } from 'react'
import Menu from '../../Template/Menu'
import Header from '../../Template/Header'
export default function BdUserPresInscrit () {
 
    return (
   
      <center>
                <Header/>
        <Menu/>
        <div style={{marginLeft:270,alignItems:'center'}}>
        {/* TABLE: LATEST ORDERS */}
       
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
                  <th>Validation</th>
                  <th>Réfuser</th>
                </tr>
              </thead>
              <tbody>
               
                   <tr>
                  <td>Ncir</td>
                  <td>jaweher</td>
                  <td>Ncir</td>
                  <td>
                    jaweherncir@gmail.com
                  </td>
                  <td>+216 20113786</td>
                  <td>
                    <a  href='#myModal'data-toggle="modal">
                    <button type="button"  className="btn btn-success" style={{width:70,height:40}}>Valider</button>
                    </a>
                   </td>
                  <td>
                    
                  <a  href='#myModal1'data-toggle="modal">
                    <button type="button" className="btn btn-danger" style={{width:70,height:40}}>Réfuser</button>
                    </a>
                    </td>
              
                
                  
                 
                  
                </tr>
                

     
              </tbody>
            </table>
          </div>
          {/* /.table-responsive */}
        </div>
        {/* /.card-body */}
     
        {/* /.card-footer */}
      </div>
      {/* /.card */}
        {/* /.accepte user */} 
      <div id="myModal" className="modal fade">
  <div className="modal-dialog modal-confirm">
    <div className="modal-content">
      <div className="modal-header">
        <div className="icon-box">
          <i className="material-icons"></i>
        </div>				
        <h4 className="modal-title w-100">Valider</h4>	
      </div>
      <div className="modal-body" >
      <p className="text-center">
        <div className="row" style={{alignItems:'center',marginLeft:100,flexDirection: 'row',display:'flex'}}>
         
     
        </div>
        </p>
      
      </div>
      <div className="modal-footer">
        <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
        <button className="btn btn-danger btn-block" data-dismiss="modal">Annuler</button>
      </div>
    </div>
  </div>
      </div>
          {/* /.accepte user */} 
          <div id="myModal1" className="modal fade">
  <div className="modal-dialog modal-confirm">
    <div className="modal-content">
      <div className="modal-header">
        <div className="icon-box" >
        <i class="material-icons">&#xE5CD;</i>
        </div>				
        <h4 className="modal-title w-100">Refuser</h4>	
      </div>
      <div className="modal-body" >
      <p className="text-center">
        <div className="row" style={{alignItems:'center',marginLeft:100,flexDirection: 'row',display:'flex'}}>
         
     
        </div>
        </p>
      
      </div>
      <div className="modal-footer">
        <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
        <button className="btn btn-danger btn-block" data-dismiss="modal">Annuler</button>
      </div>
    </div>
  </div>
      </div>
      </div>
  </center>
    )
  }

