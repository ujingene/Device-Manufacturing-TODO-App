import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component{

constructor(){
super();
this.state={ description:'', manufacturer:'' }
}

handleChange = event =>{
this.setState({ [event.target.name]:event.target.value })
}

handleSubmit = event =>{
    event.preventDefault();
    console.log("Device Description : " + this.state.description);
    console.log("Manufacturer : " + this.state.manufacturer);

    const url = "https://stark-beyond-32222.herokuapp.com/api/smart-device";
    const data = { 
        description:this.state.description,
        manufacturer_id:this.state.manufacturer
    }

    fetch(url, { 
        method: 'POST', // or 'PUT'
        mode: 'cors',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' }
    }
        )
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
        //window.location = "/" //This line of code will redirect you once the submission is succeed
        
}
render(){
    return(
        <>
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Add New Client</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Smart Devices</Link></li>
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
                    <div className="card-header">Add New Course Category</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                        <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Device Description:</label>
                        <div className="col-md-6">
                            <input id="category" type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                        </div>
                        </div>

                        <div className="form-group row">
                        <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Manufacturer:</label>
                        <div className="col-md-6">
                            <select name="manufacturer" value={this.state.event} onChange={this.handleChange}>
                                <option defaultValue>Select Manufacturer</option>
                                <option value="1">Muthaiga Industrials</option>
                                <option value="2">Other</option>
                            </select>
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

        </>
        )
}
}