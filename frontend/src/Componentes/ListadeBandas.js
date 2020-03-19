import React, { Component } from 'react'
import axios from 'axios'



export default class ListadeBandas extends Component {

    state = {
        categories: [],
        categoriesSelected: '',
        
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3000/categories')
        this.setState({categories: res.data.map(categories => categories.name)})
        console.log(this.state.categories)
    }

    onInputChange = e =>{
        this.setState({
            categoriesSelected: e.target.value
        })
    }

    
    

    render() {
        return (
            <div className="form-group">
                <div className="d-flex justify-content-center">
                    <h3>Selecciona tu banda</h3>
                </div>
                <select 
                    className="form-control"
                    name="userSelected"
                    onChange={this.onInputChange}
                >
                    {
                        this.state.categories.map(categories => 
                        <option key={categories} value={categories}>
                            {categories}
                        </option>)
                    }



                </select>
               
            </div>

            
            
        )
    }
}
