import React, { useState, useEffect } from 'react';
import {devicesURl} from './Constants';
import { useHistory } from "react-router-dom";

const DeviceList = (props) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const options = {
      method: 'GET',
      crossDomain: true,
      mode: 'no-cors',
      url: "https://stark-beyond-32222.herokuapp.com/api/smart-device",
      header: {
        "cache-control": "no-cache"
      }
    }

    const settings = {
      "crossDomain": true,
      "url": "https://stark-beyond-32222.herokuapp.com/api/smart-device",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache"
      }
    }


    const response = await fetch(options);
    const data = await response.json();
    setDevices(data.data);
    console.log(data.data);

  };

  const deleteDevice = (serial) => {
    console.log(serial);

    const formData = new FormData();
    formData.append('serial', serial);

    const options = {
      method: 'DELETE',
      mode: 'cors',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }

    fetch(devicesURl + serial, options)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setDevices(result.data.filter(device => device.serial !== serial));
          console.log('New devices', result.data);
        }
      )
      return devices;
      
  }

  let history = useHistory();

  const EditDevice = (serial) => {
    history.push({
      pathname: '/editDevice/' + serial
    });
  };

  const ShowDevice = serial => {
    history.push({
      pathname: '/showDevice/' + serial
    });
  };


  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Smart Devices</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active">Smart-Devices</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-12">
              {/* /.card */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Smart Devices</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <p><a href="/addDevice" className="btn btn-primary">Add Smart device </a></p>
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Serial</th>
                        <th>Manufacturer</th>
                        <th>description</th>
                        <th>Date Updated</th>
                        <th width="250px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devices &&
                        devices.map((device, i) => (
                          <tr key={i}>
                            <td>{device.serial}</td>
                            <td>{device.manufacturer}</td>
                            <td>{device.description}</td>
                            <td>{device.updated_at}</td>
                            <td>
                              <button className="btn btn-success" onClick={() => { ShowDevice(device.serial) }}>Show</button>
                              <button className="btn btn-warning" onClick={() => { EditDevice(device.serial) }}> Edit </button>
                              <button className="btn btn-danger" onClick={() => { deleteDevice(device.serial) }}> Delete </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </div>

  )

}

export default DeviceList;