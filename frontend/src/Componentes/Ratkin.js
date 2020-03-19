import React, { Component } from 'react'
import axios from 'axios'

export default class Ratkin extends Component {

    state = {
        ratkin: []
    }


    async componentDidMount() {
        const res = await axios.get('http://localhost:3000/categories/1/unidades')
        this.setState({ ratkin: res.data })


    }


    render() {


        return (
            
            <div>
               
                
                <div className="container">
                    <div className="row">

                        {
                            this.state.ratkin.map(ratkin => (
                                <div className="col-md-4 p-2" key={ratkin.id} >
                                    <div className="card text-white bg-danger mb-3" >
                                        <div className="card-header">
                                            <h5> {ratkin.name} <br /></h5>
                                        </div>
                                        <div className="card-body">

                            <h6>Tipo: {ratkin.clase} / Peana: {ratkin.peana} / Costo: {ratkin.costo} / Dado de Poder: {ratkin.dadopoder}</h6>
                                            <table className="table table-sm table-red">
                                                <thead  >
                                                    <tr>
                                                        <th scope="Velocidad">Vel</th>
                                                        <th scope="Ataq c/c">c/c</th>
                                                        <th scope="Ataq Rango">Rango</th>
                                                        <th scope="Amadura">Ar</th>
                                                        <th scope="Nervio">Ne</th>
                                                        <th scope="Heridas">Heridas</th>
                                                        <th scope="Altura">Alt</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{ratkin.velocidad}</td>
                                                        <td>{ratkin.ataquecuerpoacuerpo}</td>
                                                        <td>{ratkin.ataquederango}</td>
                                                        <td>{ratkin.armadura}</td>
                                                        <td>{ratkin.nervio}</td>
                                                        <td>{ratkin.heridas}</td>
                                                        <td>{ratkin.altura}</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                                <table className="table table-sm table-white">
                                                    <thead>
                                                        <tr>
                                                            <th>Dados Rango: {ratkin.dañoderango}</th>
                                                            <th>Dados C/C: {ratkin.dañocuerpoacuerpo}</th>
                                                            <th>Alineamiento: {ratkin.alineamiento}</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                </table>
                                                
                                        </div>
                                        <div className="habilidades">
                                            Habilidades: {ratkin.habilidades}
                                            <br/>
                                            
                                            ------------------------------------
                                        </div>
                                        <div className="habilidades">
                                            Conjuros: {ratkin.conjuros}
                                            <br/>
                                            
                                            ------------------------------------
                                        </div>
                                           <div className="equipo">Equipo</div> 
                                        <div className="form-check">
                                            
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                        
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                             {ratkin.equipo}<br/>
                                            <br/>
                                            ------------------------------------
                                            </label>
                                            
                                        
                                        </div> 
                                        <div className="habilidades-especiales">
                                            <h6>Habilidad Especial:</h6>
                                            {ratkin.HabilidadesEspeciales}
                                        </div> 
                                       
                                        <div className="collapse" id="collapseExample">
                                            <h6>Notas:</h6>
                                            <p>
                                             {ratkin.notas}  
                                            </p>
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
