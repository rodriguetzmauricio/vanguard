import React, { Component } from 'react'
import axios from 'axios'

export default class AlianzaDelNorte extends Component {
    
    state={
        alianza: []
    }


    async componentDidMount(){
        const res = await axios.get('http://localhost:3000/categories/2/unidades')
        this.setState({alianza: res.data})
        

    }
    
    
    render() {

        
        return (
            <div>
                <div className="container">
                        
                <div className="row">
                
                {
                  this.state.alianza.map(alianza => (
                      <div className="col-md-3 p-2" key={alianza.id} >
                          <div className="card text-white bg-secondary mb-3" >
                              <div className="card-header">
                               <h5>{alianza.name} <br/></h5> 
                              </div>
                              <div className="card-body">
                                
                               Tipo: {alianza.tipo}  <br/>
                                Peana: {alianza.peana} <br/>
                                Costo: {alianza.costo}
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
