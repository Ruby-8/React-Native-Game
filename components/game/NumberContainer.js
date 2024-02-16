import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

/**
 * Set the style of number container
 * @param {*} container
 * @returns 
 */
function NumberContainer({children}){
    return(
    <View style = {styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderwidth: 10,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize:36,
        fontWeight: 'bold'
    }
})