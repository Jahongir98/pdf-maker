import React from 'react';
import {Document, Font, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import page1 from './page1.jpg'
import page2 from './guvohnoma.png'
import {useQrEncode} from 'react-qr-hooks';

import font from './Kalam-Regular.ttf'

Font.register({family: 'CustomFont', src: font});

const styles = StyleSheet.create({
    text: {
        fontFamily: 'CustomFont',
        position: 'absolute',
        fontSize: 11,
        textAlign: 'center',
        color: '#000055',
        fontWeight: "bold",
        left: 0,
    }
});

const MyDocument = React.memo(({data}) => {
    const encoded = useQrEncode(`Toshkent moliya institutining 20${data.year}-yil ${data.day}-${data.month}dagi ${data.listNumber}-sonli buyrug'i bilan nashr etishga tavsiya etilgan`);
    const {
        year, day,
        month, orderNumber,
        author, speciality,
        lorem1, lorem2,
        lorem3, lorem4,
        lorem5, lorem6,
        listNumber
    } = data

    return <Document>
        <Page size="A5">
            <Image
                fixed={true}
                src={page1}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0}}
            />

        </Page>
        <Page size="A5">
            <Image
                fixed={true}
                src={page2}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0}}
            />
            <View>
                <Text style={{...styles.text, top: 120, left: 275, width: 17}}>{year}</Text>
                <Text style={{...styles.text, top: 131, left: 87, width: 17}}>{day}</Text>
                <Text style={{...styles.text, top: 131, left: 106, width: 56}}>{month}</Text>
                <Text style={{...styles.text, top: 131, left: 193, width: 24}}>{orderNumber}</Text>
                <Text style={{...styles.text, top: 161, left: 73, width: 272}}>{author}</Text>
                <Text style={{...styles.text, top: 183, left: 73, width: 272}}>{speciality}</Text>
                <Text style={{...styles.text, top: 204, left: 73, width: 272}}>{lorem1}</Text>
                <Text style={{...styles.text, top: 227, left: 73, width: 272}}>{lorem2}</Text>
                <Text style={{...styles.text, top: 248, left: 73, width: 242}}>{lorem3}</Text>
                <Text style={{...styles.text, top: 276, left: 73, width: 272}}>{lorem4}</Text>
                <Text style={{...styles.text, top: 319, left: 73, width: 272}}>{lorem5}</Text>
                <Text style={{...styles.text, top: 346, left: 73, width: 272}}>{lorem6}</Text>
                <Text style={{...styles.text, top: 490, left: 185, width: 67}}>{listNumber}</Text>
            </View>
            <View
                style={{
                    position: 'absolute',
                    overflow: 'hidden',
                    width: 54,
                    height: 54,
                    left: 280,
                    top: 449
                }}
            >
                <Image
                    style={{
                        position: 'absolute',
                        width: 60,
                        height: 60,
                        left: -3,
                        top: -3
                    }}
                    src={encoded}
                />
            </View>
        </Page>
    </Document>

})

export default MyDocument
