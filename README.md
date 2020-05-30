React TODO App that allows user to perform crud operations (Create/Edit/Update/Delete). This app is connected to a REST API built using Laravel

- Responsive Items Dashboard
![Dashboard](https://github.com/ujingene/Device-Manufacturing-TODO-app/blob/master/images/devices.PNG)

- Add New Device
![Create Device](https://github.com/ujingene/Device-Manufacturing-TODO-app/blob/master/images/createDevice.PNG)

- View Device details on different route
![View Device](https://github.com/ujingene/Device-Manufacturing-TODO-app/blob/master/images/viewDevice.PNG)

- Edit Device details by navigating to edit route.
![Edit Device](https://github.com/ujingene/Device-Manufacturing-TODO-app/blob/master/images/editDevice.PNG)

- Add Manufacturer details 
![Add Manufacturer](https://github.com/ujingene/Device-Manufacturing-TODO-app/blob/master/images/Manufacturer.PNG)

### Clone the App from github

### Install Application dependencies

```bash
cd `smart-device`
npm install or yarn if you prefer the later

Ensure you have node v5+ installed first
```

### Run React from root

```bash
npm start or yarn start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the browsers console.

### Build for production

```bash
cd `smart-device`
npm run build
```

### Required Fixes/Bugs
Update the admin lte Jquery datatable in public/index.html or use React datatables
Searching,  Paging not working as expected in React.
```js
$(function () {
   $("#example1").DataTable();
    $("#example2").DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
    });
  });
```

## This application uses the following Api to make requests

Use Postman to test this APi
- [Devices APi](https://stark-beyond-32222.herokuapp.com/api/smart-device).

- [Manufacturers Api](https://stark-beyond-32222.herokuapp.com/api/Manufacturer)


## App Info

### Author

[Eugene Wanjira](http://www.github.com/ujingene)

### Version

1.0.0

### License

This project is licensed under the MIT License
