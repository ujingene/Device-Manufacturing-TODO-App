import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { devicesURl } from './Constants';

export default class showDevice extends Component{

    constructor(serial){
        super();
        this.state={ 
            device: []
        }
    }
 

    //Fetch data from external API and set states of varius objects above
    componentDidMount() {
        const { match: { params }, history } = this.props;
        return fetch(devicesURl + params.serial)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    device: responseJson.data,
                });

            })
            .catch((error) => {
                console.error(error);
            });
    };

    render(){
        return(
            <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Show Client</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Smart Devices</Link></li>
                    <li className="breadcrumb-item active">show</li>
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
                        <div className="card-header">Show Device Details</div>
                        <div className="card-body">
                        <form>
                            <div className="form-group row">
                            <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Device Description:</label>
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={this.state.device.description} disabled/>
                            </div>
                            </div>


                            <div className="form-group row">
                            <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Manufacturer:</label>
                            <div className="col-md-6">
                                <input id="category" type="text" className="form-control" value={this.state.device.manufacturer} disabled/>
                            </div>
                            </div>

                            <div className="form-group row mb-0">
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