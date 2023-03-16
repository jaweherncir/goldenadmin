import React, { Component } from 'react'
import Header from '../../Template/Header';
import Menu from '../../Template/Menu';
export default class CondidatureParrainer extends Component {
  render() {
 
    return (
        <center>
        <Header/>
   <Menu/>
 <div style={{marginLeft:270,alignItems:'center'}}>
   {/* TABLE: LATEST ORDERS */}
   <div className="card">
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
             <th>Nom</th>
             <th>Prénom</th>
             <th>Mail</th>
             <th>Numéro</th>
        
             <th>Pays</th>
             <th> date d'inscrit</th>
             <th> details</th>
           </tr>
         </thead>
         <tbody>
            
           <tr>
     
             <td>jaweher</td>
             <td>Ncir</td>
             <td>
               jaweherncir@gmail.com
             </td>
             <td>+216 20113786</td>
     
             <td>Tunisie</td>
             <td>
             05/02/2019
             </td>
             <td><span className="badge badge-success"><a href='FormulaireCondidature'>message</a></span></td>
           
       
            
           </tr>
          
         
        
      
         
   
           


         </tbody>
       </table>
     </div>
     {/* /.table-responsive */}
   </div>
   {/* /.card-body */}
   <div className="card-footer clearfix">

     <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
   </div>
   {/* /.card-footer */}
 </div>
 {/* /.card */}
 </div>
</center>
    )
  }
}
