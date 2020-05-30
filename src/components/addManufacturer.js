import React, { Component } from 'react';
import { Link, history } from 'react-router-dom';
import {ManURl} from './Constants';

export default class addManufacturer extends Component{

constructor(props){
super();
this.state = { 
    manufacturer:'', 
    manufacturersList: ''
}
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = event =>{
    event.preventDefault();
    console.log("Manufacturer : " + this.state.manufacturer);

    const data = { 
        name:this.state.manufacturer
    }

    const { match: { params }, history } = this.props;

    fetch(ManURl, { 
        method: 'POST', // or 'PUT'
        mode: 'cors',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' }
    }
        )
        .then(res => {
            history.push('/addManufacturer')
        })
            .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response)); 
        //window.location = "/" //This line of code will redirect you once the submission is succeed
        
}

  //Fetch data from external API and set states of varius objects above
  componentDidMount() {
    return fetch(ManURl)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          manufacturersList: responseJson.data,
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }


render(){
    return(
        <div className="content-wrapper">
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Add New </h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                <li className="breadcrumb-item active">create</li>
                </ol>
            </div>
            </div>
        </div>
        </section>

        <section className="content">
        <div className="container-fluid">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Add New Manufacturer</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                        <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Manufacturer:</label>
                        <div className="col-md-6">
                            <input id="category" type="text" className="form-control" name="manufacturer" value={this.state.manufacturer} onChange={this.handleChange} required/>
                        </div>
                        </div>

                        <div className="form-group row mb-0">
                        <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                            Add Manufacturer
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Manufacturers</div>
                            <div className="card-body"></div>
                            <div>
                                <ol>
                                    { this.state.manufacturersList 
                                        && this.state.manufacturersList.map(manufac => (
                                        <li key={manufac.id} value={manufac.id}>{manufac.manufacturer}</li>
                                    ))}
                                </ol>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</div>
        )
    }
}