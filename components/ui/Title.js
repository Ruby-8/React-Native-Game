import { Text, StyleSheet } from "react-native";

/**
 * Set the style of title
 * @param {*} param0 
 * @returns 
 */
function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}
export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})