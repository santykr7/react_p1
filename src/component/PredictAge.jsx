import axios from 'axios';
import React, { useState } from 'react'

function PredictAge() {

    const [party, setParty] = useState("");
    const [family, setFamily] = useState("");
    const [office, setOffice] = useState("");

    const fetchData = () => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/party/`)
            .then((res) => {
                console.log(res.data[0].excuse)
            })
    }
    const fetchData1 = () => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`)
            .then((res) => {
                setFamily(res.data[0].excuse)
            })
    }
    const fetchData2 = () => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/office/`)
            .then((res) => {
                setOffice(res.data[0].excuse)
            })
    }

    return (
        <div className='App'>

            <button onClick={fetchData}>party</button>
            <button onClick={fetchData1}>Family</button>
            <button onClick={fetchData2}>office</button>


            <p>{party}</p>
            <p>{family}</p>
            <p>{office}</p>
        </div>
    )
}

export default PredictAge
