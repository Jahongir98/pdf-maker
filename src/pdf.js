import React, {useState} from 'react';
import {Document, Font, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import page1 from './page1.jpg'
import page2 from './page2.jpg'
import {useQrEncode} from 'react-qr-hooks';

import font from './Kalam-Regular.ttf'
Font.register({family: 'CustomFont', src: font});

const styles = StyleSheet.create({
    text: {
        fontFamily: 'CustomFont',
        position: 'absolute',
        textAlign: 'center',
        color: '#000055',
        fontWeight: "bold",
        left: 0,
    }
});

const MyDocument = React.memo(({data}) => {
    const [date, setDate]=useState(new Date().getTime().toString())
    console.log(data)
    const encoded = useQrEncode(date);
    const {
        year,              day,
        month,             orderNumber,
        author,            speciality,
        lorem1,            lorem2,
        lorem3,            lorem4,
        lorem5,            lorem6,
        listNumber
    } = data

    return <Document>
        {true && <Page size="A4">
            <Image
                fixed={true}
                src={page1}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0}}
            />

        </Page>}
        <Page size="A4">
            <Image
                fixed={true}
                src={page2}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0}}
            />
            <View>
                <Text style={{...styles.text, top: 168, left: 390, width: 24}}>{year}</Text>
                <Text style={{...styles.text, top: 183, left: 123, width: 24}}>{day}</Text>
                <Text style={{...styles.text, top: 183, left: 150, width: 80}}>{month}</Text>
                <Text style={{...styles.text, top: 183, left: 273, width: 34}}>{orderNumber}</Text>
                <Text style={{...styles.text, top: 225, left: 103, width: 385}}>{author}</Text>
                <Text style={{...styles.text, top: 256, left: 103, width: 385}}>{speciality}</Text>
                <Text style={{...styles.text, top: 287, left: 103, width: 385}}>{lorem1}</Text>
                <Text style={{...styles.text, top: 318, left: 103, width: 385}}>{lorem2}</Text>
                <Text style={{...styles.text, top: 349, left: 103, width: 342}}>{lorem3}</Text>
                <Text style={{...styles.text, top: 405, left: 103, width: 385}}>{lorem4}</Text>
                <Text style={{...styles.text, top: 450, left: 103, width: 385}}>{lorem5}</Text>
                <Text style={{...styles.text, top: 485, left: 103, width: 385}}>{lorem6}</Text>
                <Text style={{...styles.text, top: 693, left: 262, width: 96}}>{listNumber}</Text>
            </View>
            <View
                style={{
                    // backgroundColor: '#00ff00',
                    position: 'absolute',
                    overflow: 'hidden',
                    width: 77,
                    height: 77,
                    left: 397,
                    top: 634
                }}
            >
                <Image
                    style={{
                        position: 'absolute',
                        width: 86,
                        height: 86,
                        left: -5,
                        top: -5
                    }}
                    src={encoded}
                />
            </View>
        </Page>
    </Document>

})

export default MyDocument
