import React, { Component } from 'react';
import { Link, history } from 'react-router-dom';
import Manufacturer from './manufacturers';
import {devicesURl} from './Constants';

export default class EditDevice extends Component{

constructor(){
super();
this.state={ id: '', description:'', manufacturer:'', device:[]}
}

//Fetch data from external API and set states of varius objects above
    componentDidMount() {
        const { match: { params }, history } = this.props;
        return fetch(devicesURl + params.serial)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    id: responseJson.data.serial,
                    description: responseJson.data.description,
                    manufacturer: responseJson.data.manufacturer,
                    device: responseJson.data,
                });

            })
            .catch((error) => {
                console.error(error);
            });
    };

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = event =>{
    event.preventDefault();
    console.log("Serial : " + this.state.device.id);
    console.log("Device Description : " + this.state.description);
    console.log("Manufacturer : " + this.state.manufacturer);

    const data = { 
        description:this.state.description,
        manufacturer_id:this.state.manufacturer
    }

    const { match: { params }, history } = this.props;

    fetch(devicesURl + params.serial, { 
        method: 'PUT', // or 'PUT'
        mode: 'cors',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' }
    }
        )
        .then(res => {
            history.push('/');
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
        //window.location = "/" //This line of code will redirect you once the submission is succeed
        
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
                <li className="breadcrumb-item"><Link to="/">Smart Devices</Link></li>
                <li className="breadcrumb-item active">edit</li>
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
                    <div className="card-header">Edit Device</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                        <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Device Description:</label>
                        <div className="col-md-6">
                            <input id="category" type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                        </div>
                        </div>

                        <div>
                            <div className="form-group row">
                                <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Manufacturer:</label>
                                <div className="col-md-6">
                                    <select name="manufacturer" value={this.state.manufacturer} onChange={this.handleChange}>
                                        <Manufacturer />   
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row mb-0">
                        <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                            Add Device
                            </button>
                        </div>
                        </div>
                    </form>
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