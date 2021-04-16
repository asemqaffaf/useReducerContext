import { useState, useEffect } from 'react'

export default function StateCard() {

    const [container, setContainer] = useState([]);

    useEffect(async () => {

        const containerColumn = [...Array(3).keys()].map(i => {
            return [...Array(3).keys()].map(j => {
                return <div key={`${i}-${j}`} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >{`${i}-${j}`}</div>
            })
        })
        // const rowOne = []
        // rowOne.push(<div key={'0-0'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >0-0</div>)
        // rowOne.push(<div key={'0-1'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >0-1</div>)
        // rowOne.push(<div key={'0-2'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >0-2</div>)

        // const rowTwo = []
        // rowTwo.push(<div key={'1-0'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >1-0</div>)
        // rowTwo.push(<div key={'1-1'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >1-1</div>)
        // rowTwo.push(<div key={'1-2'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >1-2</div>)

        // const rowThree = []
        // rowThree.push(<div key={'2-0'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >2-0</div>)
        // rowThree.push(<div key={'2-1'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >2-1</div>)
        // rowThree.push(<div key={'2-2'} style={{ backgroundColor: 'red', height: '10vh', width: '5vw', margin: '10px' }} >2-2</div>)


        // const containerColumn = []
        // containerColumn.push(rowOne)
        // containerColumn.push(rowTwo)
        // containerColumn.push(rowThree)

        setContainer(containerColumn)


    }, [])

    const splitCol = () => {
        if (container.length > 1) {
            setContainer(prevState => prevState.slice(0, -1))
        }
        // console.log(container)
    }
    const splitRow = () => {
        // const splitLastRow = container.map(i => {
        //     return i.slice(0, -1)
        // })
        // console.log(container.length)
        // if (container.length >= 1) {
        setContainer(prevState => (prevState.map(i => {
            return i.length > 1 ? i.slice(0, -1) : i
        })))
        // }


    }
    return (
        <>
            <button onClick={splitCol}>split col</button>
            <button onClick={splitRow}>split row</button>
            <div style={{ height: '90vh', display: 'flex', flexDirection: 'row' }}>

                {container.map((column, index) => (
                    <div key={`column-${index}`}>
                        {column.map(row => {
                            return row
                        })}
                    </div>
                ))}

            </div>
        </>
    );
}

// export default StateCard;
