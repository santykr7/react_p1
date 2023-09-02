
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function RandomApi() {
    const [facts, setFacts] = useState("")

    const fetchCatFact = () => {
        axios.get("https://catfact.ninja/fact?max_length=140").then((res) => {
            setFacts(res.data.fact)
        })
    }

    useEffect(() => {
        fetchCatFact()
    }, [])


    return (
        <div>
            <button onClick={fetchCatFact}>Generate cat facts</button>
            <p>{facts}</p>
        </div>
    )
}

export default RandomApi
