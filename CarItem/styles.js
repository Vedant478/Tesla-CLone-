import {StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
    
      subtitle:{
        fontSize: 16,
        color: '#5c5e62'
    
    
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
        color: 'black',
        
    
      },
    
      titles:{
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    
      },
      carContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
    
      },

})
export default styles
