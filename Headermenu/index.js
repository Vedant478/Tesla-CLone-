import React from "react";
import {View,Image } from "react-native";


const Headermenu = () => {
    return(
        <View style={{
            position: 'absolute',
            top: 5,
            zIndex: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width:'100%',
            padding: 20,

        }}>
            <Image style={{
                width: 100,
                height: 20,
                resizeMode: 'contain',
            }} source={require('../../../assets/images/logo.png')}/>
            <Image style={{
                width: 25,
                height: 25,
                resizeMode: 'contain'
            }} source={require('../../../assets/images/menu.png')}/>

        
            
        </View>

    );
};

export default Headermenu;
