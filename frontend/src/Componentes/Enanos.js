import React, { Component } from 'react'
import axios from 'axios'

export default class Enanos extends Component {
    
    state={
        enanos: []
    }


    async componentDidMount(){
        const res = await axios.get('http://localhost:3000/categories/3/unidades')
        this.setState({enanos: res.data})
        

    }
    
    
    render() {

        
        return (
            <div>
                <div className="container">
                <div className="row">
                
                {
                  this.state.enanos.map(enanos => (
                      <div className="col-md-3 p-2" key={enanos.id} >
                          <div className="card text-white bg-success mb-3" >
                              <div className="card-header">
                               <h5> {enanos.name} <br/></h5> 
                              </div>
                              <div className="card-body">
                                
                               Tipo: {enanos.tipo}  <br/>
                                Peana: {enanos.peana} <br/>
                                Costo: {enanos.costo}
                              </div>
                              
                          </div>
                      </div>
                  ))
              }
          </div>
                </div>
            </div>
        )
    }
}
