import React from 'react';

import { View,Text,ImageBackground,Pressable} from 'react-native';



const StyledButton =(props) => {
    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColour = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';

    return(
        <View style={{
            width: '100%',
            padding: 10,
      }

        }>
            <Pressable 
                style={[{height: 40,justifyContent:'center',alignItems:'center',borderRadius:20,},{backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
                    

            
            
            >
                <Text style={[{fontSize:12 , fontWeight: '500', textTransform: 'uppercase' , color: 'black'},{color: textColour}]}>{content}</Text>
            </Pressable>
        </View>
    );
};
export default StyledButton;
