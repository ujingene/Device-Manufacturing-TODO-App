import React from 'react';
import { Link } from 'react-router-dom';
import { fetchDevice, updateDevice } from './Functions';

const EditDevice = () =>({
getInitialState() {
        return {
            devices: []
        };
    },

    componentDidMount() {
        fetchDevice(this.props.params.serial)
            .then((data) => {
                this.setState(state => {
                    state.devices = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit(data) {
        updateDevice(this.state.devices.serial, data);
        this.props.router.push('/');
    },

render(){
    return(
        <>
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Edit Client</h1>
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
                    <div className="card-header">Edit Device Details</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group row">
                        <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Device Description:</label>
                        <div className="col-md-6">
                            <input id="category" type="text" className="form-control" name="description" value={this.state.devices.description} />
                        </div>
                        </div>


                        <div className="form-group row">
                        <label htmlFor="category" className="col-md-4 col-form-label text-md-right">Manufacturer:</label>
                        <div className="col-md-6">
                            <select name="manufacturer" value={this.state.devices.manufacturer_id}>
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
       );
    }
});

export default EditDevice;