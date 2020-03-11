import React, {useState, useEffect} from 'react';

const DeviceList = (props) =>{
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices();
  }, []); 

  //get devices from api
  const getDevices = async () => {
    const response = await fetch(`https://stark-beyond-32222.herokuapp.com/api/smart-device`);
    const data = await response.json();
    setDevices(data.data);
    console.log(data.data);

  };
//delete device
 const deleteDevice = (serial, devices) => {
    const apiUrl = `https://stark-beyond-32222.herokuapp.com/api/smart-device/`;
    console.log(apiUrl)
    const formData = new FormData();
    formData.append('serial', serial);

    const options = {
      method: 'DELETE',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }

    fetch(apiUrl + serial, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            devices: devices.filter(device => device.serial !== serial)
          });
          return devices
        }
      )
  }

  //edit devices
const EditDevice = (serial) => {  
    props.history.push({  
      pathname: '/editDevice/' + serial
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
              <table id="example2" className="table table-bordered table-striped">
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
                      <button className="btn btn-success">Show</button>
                      <button className="btn btn-warning" onClick={() => { EditDevice(device.serial) }}> Edit </button>
                      <button className="btn btn-danger" onClick={ () => {deleteDevice(device.serial)}}> Delete </button>
                    </td>
                  </tr>
                  ) )}
                </tbody>
                
                <tfoot>
                  <tr>
                    <th>Serial</th>
                    <th>Manufacturer id</th>
                    <th>description</th>
                    <th>Date Updated</th>
                    <th width="250px">Action</th>
                  </tr>
                </tfoot>
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

export default DeviceList
