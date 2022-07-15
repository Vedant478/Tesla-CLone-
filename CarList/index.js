import React from "react";
import {View,Text , FlatList , Dimensions} from "react-native";
import cars from "./cars";
import CarItem from "..";

const CarList = (props) => {
    return(
        <View style={{
            width: '100%',
        }}> 
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />} 
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            
            />

            
        </View>

    );
};

export default CarList;
