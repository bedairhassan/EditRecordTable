import React, { useCallback, useState } from 'react'

const ParentEditSeparate = () => {

    // isEditing extra variable for client
    const [data, dataSet] = useState([
        { id: 2, name: `Ahmed` },
        { id: 3, name: `Hassan` }])

    const [isAppear, isAppearSet] = useState(false)
    const [itemToEdit, itemToEditSet] = useState([])

    const returnObject = item => {

        // 
        const copy = [...data]

        for (let i = 0; i < copy.length; i++) {

            if (copy[i].id === item.id) {
                copy[i] = { ...item, isEditing: false }
            }
        }
        //

        dataSet([...copy])

        // 
        isAppearSet(false)
    }

    const updateisEditingAttr = item => {

        isAppearSet(true)
        itemToEditSet(item)
    }

    return (

        <table>
            <thead>
                <th>name</th>
                <th>isedit</th>
            </thead>
            <tbody>
                {data.map(item => {



                    return (<tr>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => updateisEditingAttr(item)}>Edit Here</button>
                        </td>
                    </tr>)
                })}

                <br />
                {
                    isAppear &&
                    <InputForm item={itemToEdit} returnObject={returnObject} />
                }
            </tbody>
        </table>
    )
}

const InputForm = ({ item, returnObject }) => {

    const [itemC, itemCSet] = useState(item)

    return (

        <tr>
            <td><input
                placeholder={item.name}
                onChange={e => itemCSet({ ...item, name: e.target.value })} /></td>
            <td><button onClick={() => returnObject(itemC)}>Apply Edit</button></td>
        </tr>
    )
}

export default ParentEditSeparate
