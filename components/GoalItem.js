import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    const { isLast } = props
    return (
        <View style={[styles.goalItem, isLast && styles.lastItem]} >
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: 'white',
        borderLeftWidth: 4,
        marginBottom: 10,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    lastItem: {
        borderBottomWidth: 0,
    }
})

export default GoalItem;
