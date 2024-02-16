import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

/**
 * Set the instruction text in same style
 * @param {*} text
 * @returns 
 */
function InstructionText({children}) {
    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
});