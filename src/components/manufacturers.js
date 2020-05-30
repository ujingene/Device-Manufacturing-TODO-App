import React, { useEffect, useState} from 'react';
import { ManURl } from './Constants';

export const ManufacturerList = async () => {
    const [manufacturers, setManufacturer]  = useState([]);

    useEffect(() => {
        getManufacturers();
    }, []);

    const getManufacturers = async () => {
        const response = await fetch(ManURl);
        const data = await response.json();
        setManufacturer(data.data);
        console.log(data.data);

    };

    return (
        <>
        <ul>
            { manufacturers && manufacturers.map(manufac => (
                <li key={manufac.id} value={manufac.id}>{manufac.manufacturer}</li>
            ))}
        </ul>
        </>
    )
}

const Manufacturer = () => {
    const [manufacturers, setManufacturer]  = useState([]);

    useEffect(() => {
        getManufacturers();
    }, []);

    const getManufacturers = async () => {
        const response = await fetch(ManURl);
        const data = await response.json();
        setManufacturer(data.data);
        console.log(data.data);

    };

    return (
        <>
            <option defaultValue>Select Manufacturer</option>
                { manufacturers && manufacturers.map(manufac => (
                    <option key={manufac.id} value={manufac.id}>{manufac.manufacturer}</option>
                ))}
        </>
    )
}

export default Manufacturer;