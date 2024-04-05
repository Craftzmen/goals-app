import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable, Image } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer} >
        <Pressable style={styles.button} onPress={startAddGoalHandler} >
          <Text style={styles.buttonText} >New Goal</Text>
        </Pressable>
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer} >
          <View style={styles.header} >
            <Text style={styles.goalText} >Course Goals</Text>
            <View style={styles.goalLength} >
              <Text>{courseGoals.length || 0}</Text>
            </View>
          </View>
          <View>
            {courseGoals.length === 0 && (
              <Text style={styles.message} >No Goal added yet !</Text>
            )}
          </View>
          <FlatList
            style={styles.goalList}
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                  isLast={itemData.item.index === courseGoals.length - 1}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: 28,
    height: 30,
  },
  goalText: {
    fontSize: 18,
    fontWeight: '600',
  },
  goalsContainer: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    marginTop: 24,
    borderRadius: 10,
  },
  goalList: {
    marginTop: 16,
  },
  goalLength: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    marginTop: 16,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'gray',
    fontWeight: '500',
  }
});
