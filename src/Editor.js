import React from 'react';

const Editor = ({fields, setFields}) => {
    return (
        <div className='editor'>
            <input
                onChange={(e) => setFields({...fields, year: e.target.value})}
                value={fields.year}
                style={{top: '20.1vh', left: '46.2vh', width: '2.5vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, day: e.target.value})}
                value={fields.day}
                style={{top: '22vh', left: '14.7vh', width: '2.5vh'}}
            />
            <select
                onChange={(e) => setFields({...fields, month: e.target.value})}
                defaultValue={fields.month}
                style={{top: '22vh', left: '18vh', width: '9vh'}}
            >
                <option value="yanvar">yanvar</option>
                <option value="fevral">fevral</option>
                <option value="mart">mart</option>
                <option value="aprel">aprel</option>
                <option value="may">may</option>
                <option value="iyun">iyun</option>
                <option value="iyul">iyul</option>
                <option value="avgust">avgust</option>
                <option value="sentyabr">sentyabr</option>
                <option value="oktyabr">oktyabr</option>
                <option value="noyabr">noyabr</option>
                <option value="dekabr">dekabr</option>
            </select>
            <input
                onChange={(e) => setFields({...fields, orderNumber: e.target.value})}
                value={fields.orderNumber}
                style={{top: '22vh', left: '33vh', width: '2.5vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, author: e.target.value})}
                value={fields.author}
                style={{top: '27vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, speciality: e.target.value})}
                value={fields.speciality}
                style={{top: '30.7vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, lorem1: e.target.value})}
                value={fields.lorem1}
                style={{top: '34.2vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, lorem2: e.target.value})}
                value={fields.lorem2}
                style={{top: '37.9vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, lorem3: e.target.value})}
                value={fields.lorem3}
                style={{top: '41.7vh', left: '12vh', width: '41vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, lorem4: e.target.value})}
                value={fields.lorem4}
                style={{top: '48.3vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, lorem5: e.target.value})}
                value={fields.lorem5}
                style={{top: '53.9vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, lorem6: e.target.value})}
                value={fields.lorem6}
                style={{top: '57.8vh', left: '12vh', width: '46vh'}}
            />
            <input
                onChange={(e) => setFields({...fields, listNumber: e.target.value})}
                value={fields.listNumber}
                style={{top: '82.5vh', left: '31vh', width: '11.4vh'}}
            />
        </div>
    );
};

export default Editor;
