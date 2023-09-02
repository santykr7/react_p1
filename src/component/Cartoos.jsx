import React from 'react'

function Cartoos() {

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

    let firstLove = true;

    return (
        <>

            <h1>{firstLove ? "Ashwini" : "Amrita"} I love You</h1>

            <div>

                <table>

                    <tr>
                        <th>Wife</th>
                        <th>age</th>
                        <th>cars</th>
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
                </table>

            </div>
        </>
    )
}

export default Cartoos
