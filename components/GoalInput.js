import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Modal, Image, Pressable } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    console.log("Goal Input !")

    return (
        <Modal transparent={true} visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer} >
                <Image
                    style={styles.image}
                    source={require('../assets/images/modal-head.gif')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your goal...'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer} >
                    <Pressable android_ripple={{ color: '#ffabab' }} style={[styles.button, styles.cancelButton]} onPress={props.onCancel} >
                        <Text style={[styles.buttonText, styles.cancelText]} >Cancel</Text>
                    </Pressable>
                    <Pressable android_ripple={{ color: 'gray' }} style={[styles.button, styles.addButton]} onPress={addGoalHandler} >
                        <Text style={styles.buttonText} >Add</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        backgroundColor: 'white',
    },
    textInput: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '100%',
        backgroundColor: "#f1f1f1",
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 26,
        gap: 24,
        width: '100%',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 10,
    },
    addButton: {
        backgroundColor: 'black',
    },
    cancelButton: {
        backgroundColor: '#f2f2f2',
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 16,
        color: 'white',
    },
    cancelText: {
        color: 'gray'
    },
    image: {
        borderRadius: 100,
        width: 300,
        height: 300,
        margin: 20,
    }
})