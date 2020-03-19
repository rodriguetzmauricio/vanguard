import React, { Component } from 'react'
import axios from 'axios'

export default class ListadeUnidades extends Component {
    
    
    state={
        unidades: [],
        
    }
    
    async componentDidMount(){
        const res = await axios.get('http://localhost:3000/unidades');
        this.setState({unidades: res.data})
        
    }
    
    render() {
        return (
          <div className="row">
                
                {
                  this.state.unidades.map(unidades => (
                      <div className="col-md-4 p-2" key={unidades.id} >
                          <div className="card" >
                              <div className="card-header">
                               <h5>{unidades.name} <br/></h5> 
                              </div>
                              <div className="card-body">
                                
                                {unidades.tipo} <br/>
                                {unidades.peana} <br/>
                                {unidades.costo}
                              </div>
                              
                          </div>
                      </div>
                  ))
              }
          </div>
           
         
            
          
        )
    }
}
