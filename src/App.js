import React, {useEffect, useState} from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import MyDocument from "./pdf";
import Editor from "./Editor";

const today = new Date()

const App = () => {
    const [fields, setFields] = useState({
        year: today.getFullYear().toString().slice(2),
        day: today.getDate().toString(),
        month: 'fevral',
        orderNumber: '',
        author: "",
        speciality: "",
        lorem1: '',
        lorem2: '',
        lorem3: '',
        lorem4: '',
        lorem5: '',
        lorem6: '',
        listNumber: ''
    })
    const [data, setData] = useState({})

    const keyHandler = e => {
        if (e.key === 'Enter')
            setData(fields)
    }
    useEffect(() => {
        window.addEventListener('keyup', keyHandler)
        return () => window.removeEventListener('keyup', keyHandler)
    }, [fields])

    return (
        <div style={{display: 'flex'}}>
            <Editor fields={fields} setFields={setFields}/>
            <PDFViewer>
                <MyDocument data={data}/>
            </PDFViewer>
        </div>

    )
}

export default App
