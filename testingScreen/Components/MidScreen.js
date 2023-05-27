import React from "react";
import {Dimensions,Text, View, StyleSheet, Image} from 'react-native';

function MidScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                All Spaces
            </Text>
            <View style={styles.logoContainer}>
                <View style={styles.logoWrapper}>
                    <Image
                        source={require('../assets/truck_parking.png')}
                        style={styles.logoImage}
                    />
                </View>
                <Text style={styles.imgTxt}>Truck{'\n'}Parking</Text>

                <View style={[styles.logoWrapper, {marginLeft: 25}]}>
                    <Image
                        source={require('../assets/car_parking1.png')}
                        style={[styles.logoImage, {height: 50, marginTop: 5}]}
                    />
                </View>
                <Text style={styles.imgTxt}>Car{'\n'}Parking</Text>

                <View style={[styles.logoWrapper, { marginLeft: 27 }]}>
                    <Image
                        source={require('../assets/storage_box.png')}
                        style={[styles.logoImage, {height: 50, marginTop: 10}]}
                    />
                </View>
                <Text style={styles.imgTxt}>Storage{'\n'}Box</Text>

                <View style={[styles.logoWrapper,{marginLeft: 23}]}>
                    <Image
                        source={require('../assets/warehouse1.png')}
                        style={[styles.logoImage, { marginLeft: 6 }]}
                    />
                </View>
                <Text style={[styles.imgTxt]}>Warehouse</Text>

                <View style={[styles.logoWrapper,{marginTop: 120 , marginLeft: -310}]}>
                    <Image
                        source={require('../assets/container.png')}
                        style={[styles.logoImage, { marginLeft: 8 , marginTop: 6 }]}
                    />
                </View>
                <Text style={[styles.imgTxt, {position:'absolute', bottom:3, marginLeft: 17}]}>
                    Container {'\n'}Parking</Text>

                <View style={[styles.logoWrapper, {marginTop: 120}]}>
                    <Image
                        source={require('../assets/more1.png')}
                        style={[styles.logoImage, { marginLeft: 5 }]}
                    />
                </View>
                <Text style={[styles.imgTxt , {position: 'absolute', bottom: 13, marginLeft: 115}]}>More</Text>
            </View>
        </View>
    );
}
const deviceWidth =Math.round(Dimensions.get('window').width)
const styles=StyleSheet.create({
    container: {
        flex: 1, 
        width: deviceWidth - 27,
    },
    logoContainer: {
        bottom: 170,
        backgroundColor:'rgb(255,255,248)',
        width: deviceWidth-27,
        position: 'absolute',
        height: 220,
        borderRadius: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 23,
        marginBottom: 20,
        position: 'absolute',
        bottom: 375,
        fontWeight: 'bold'
    },
    logoImage: {
        height: 70, 
        width: 60,
        resizeMode: 'center',
        marginLeft: 5,
        tintColor: 'rgb(15, 82, 186)'
    },
    imgTxt: {
        fontSize: 10,
        marginTop: 82,
        marginLeft: -55,
        textAlign: 'center'
    },
    logoWrapper: {
        
            width: 70, 
            height: 70 , 
            borderRadius: 70 / 2,
            marginLeft: 10,
            marginTop: 10,
            backgroundColor: 'white'
    }

})

export default MidScreen ;