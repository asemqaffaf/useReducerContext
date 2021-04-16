import { useState, useEffect } from 'react'
// import { userContext } from '../hooks/userContext'

export default function Grid() {

    const [container, setContainer] = useState([]);

    useEffect(async () => {

        const row = []
        row.push(<div style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >0</div>)
        row.push(<div style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >1</div>)
        row.push(<div style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >2</div>)
        // row.push(1)
        // row.push(2)


        const column = []
        column.push(row)
        column.push(row)

        const containerColumn = []
        containerColumn.push(row)
        containerColumn.push(row)


        containerColumn.forEach((column, index) => {
            column.forEach(row => {
                console.log(index, row)
            })
        })

        // setContainer(prevState => [...prevState, '1'])
        // // await setContainer(['1'])

        // setTimeout(() => {
        //     console.log(container)
        // }, 1000);
    }, [])

    return (
        <div style={{ height: '90vh', display: 'flex', flexDirection: 'row' }}>

            {[...Array(2).keys()].map(_ => (
                <div key={_}>
                    {[...Array(2).keys()].map(_ => (
                        <div style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} ></div>
                    ))}
                </div>
            ))}

        </div>
    );
}
