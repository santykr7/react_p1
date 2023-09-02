
import React from 'react'
import "./Passwordgenrator.css"

function Passwordgenrator() {

    let arr = ["BMW", "AUDI", "PORSCHE", "LAMBO"]
    let arr1 = [4, 7, 85, 2, 6, 9, 1, 4, 6, 3, 63, 12]
    let obj = {
        name: "10",
        Age: 12
    }
    const student = [
        { name: "Ashwini", age: 20, add: "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000" },
        { name: "Mahak", age: 17, add: "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000" },
        { name: "Amrita", age: 16, add: "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000" }
    ]

    return (
        <div>
            {/* <p>{arr}</p>
            <p>{obj.name / obj.Age}</p>
            {arr1.filter((num) => { return num % 2 == 0 })}
            <ul>
                {arr.map((cars) => <li>{cars}</li>)}
            </ul> */}
            <h1 className="heading">Brides Name</h1>

            <table>
                <tr>
                    <th>Wife</th>
                    <th>age</th>
                    <th>add</th>
                </tr>
                {student.map((student) => (
                    <tr>
                        <td>
                            {student.name}
                        </td>
                        <td>
                            {student.age}
                        </td>
                        <td>
                            <img src={student.add} />
                        </td>
                    </tr>
                )

                )}

                {/* {(student.name).map((name, i) => (<td key={i}>{toString(name)}</td>))}
                <tr>Age</tr>
                {(student.age).map((age, j) => <td key={j}>{age}</td>)}
                <tr>Address</tr>
                {(student.add).map((add, k) => <td key={k}>{toString(add)}</td>)} */}
            </table>

        </div>
    )
}


export default Passwordgenrator

