import {Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import React, {ReactElement, ReactNode, useState} from "react";
import {Checkbox} from "expo-checkbox";
import {Input} from "./components/input/Input";

export default function App() {
  const [value, setValue] = useState<string>('')
  const [show, setShow] =useState<number>(0)
  const [tasks, setTasks] = useState([
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JS', isDone: false},
    {id: 4, title: 'React', isDone: true},
    {id: 5, title: 'React-Native', isDone: false},
  ])

  const addTask = () => {
    const maxId = tasks.reduce( (maxId, task)=> task.id > maxId ? task.id : maxId, 0)
    const newTask = { id: maxId+1, title: value, isDone: false }
    setTasks( prevState => [...prevState, newTask])
    setValue('')
  }

  const changeStatus = (taskId: number, status: boolean) => {
    setTasks(prevState => prevState.map(task => task.id === taskId? {...task, isDone: status} : task))
  }

  const changeTitle = (taskId: number, title: string) => {
    setTasks(prevState => prevState.map(task => task.id === taskId? {...task, title} : task))
    setShow(0)
  }

  return (
    <View style={styles.container}>
      <HideKeyboard>
        <View style={[{width: '80%', alignItems: 'center', paddingVertical: 50}]}>
          <TextInput style={[globalStyles.border, styles.input]} value={value} onChangeText={setValue}/>
        </View>
      </HideKeyboard>
      <View>
        <Button color={'#ff8906'} title='Add task' onPress={addTask}/>
      </View>
      <View style={{width: '60%'}}>
        {tasks.map(task => (
            <View key={task.id} style={[globalStyles.boxTask]}>
              <Checkbox value={task.isDone} onValueChange={(value)=>changeStatus(task.id, value)}/>
              {show === task.id
                  ? <Input title={task.title} changeTitle={(title)=>changeTitle(task.id, title)}/>
                  : <Text onPress={()=> setShow(task.id)}>{task.title}</Text>}
            </View>))}
      </View>
    </View>
  );
}

const HideKeyboard = ({children}: {children: ReactNode}): ReactElement => (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    fontSize: 18,
    backgroundColor: '#fff',
    padding: 4,
  }
});

export const globalStyles = StyleSheet.create({
  border: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red'
  },
  boxTask: {
    flexDirection: 'row',
    backgroundColor: '#fffffe',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginVertical: 3,
  }
})