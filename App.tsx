import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {Checkbox} from "expo-checkbox";

export default function App() {
  const [value, setValue] = useState<string>('TextInput')
  const [tasks, setTasks] = useState([
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JS', isDone: false},
    {id: 4, title: 'React', isDone: true},
    {id: 5, title: 'React-Native', isDone: false},
  ])

  return (
    <View style={styles.container}>
      <TextInput style={[globalStyles.border, styles.input, {backgroundColor: 'blue'}]} value={value} onChangeText={setValue}/>
      <View style={{width: '60%'}}>
        {tasks.map(task => (
            <View key={task.id} style={[globalStyles.boxTask]}>
              <Checkbox value={task.isDone} onValueChange={()=>{}}/>
              <Text>{task.title}</Text>
            </View>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    height: 40,
    fontSize: 18,
    backgroundColor: '#fff',
    padding: 8,
    marginBottom:15,
  }
});

const globalStyles = StyleSheet.create({
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
  }
})