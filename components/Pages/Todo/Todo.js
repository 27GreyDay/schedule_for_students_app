import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image,  ScrollView, SafeAreaView } from 'react-native';
import { COLORS } from '../../../constants/theme';
import TodoTitle from './TodoTitle';
import TodoCard from './TodoCard';
import TodoEdit from './TodoEdit';
import tasksData from './../../../constants/tasksData'

const Todo = props => {
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    tasksData.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleAdd = () => {
    const newTask = {
      date: "20 июля",
      namePair: "Новое задание",
      task: "Выполнить новое задание",
    };
    setTasks([...tasks, newTask]);
  };


  return ( 
    <View style={[ styles.container, {height: props.save ? '91.8%' : '100%'}]}>
      <TodoTitle save={props.save} setSave={props.setSave}/>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {tasks.map((task, index) => (
            props.save ?
              (
                <TodoCard  
                  key={index} 
                  date={task.date}
                  namePair={task.namePair}
                  task={task.task}
                  handleDelete={handleDelete}
                  index={index}
                />
              ) : (
                <TodoEdit
                  key={index} 
                  date={task.date}
                  namePair={task.namePair}
                  task={task.task}
                  handleDelete={handleDelete}
                  index={index}
                />
              )
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
  const styles = StyleSheet.create({
    title: {
      marginTop: 60,
      marginBottom: 30,
      fontFamily: 'Ubuntu-Bold',
      textTransform: 'uppercase',
      fontSize: 16,
      color: COLORS.white2,
      alignSelf: 'center'
    },
    container: {
      marginHorizontal: 20
    },
    icons: {
      width: 24,
      height: 24,
    },
    button: {
      flexDirection: 'row',
      marginBottom: 20
    },
    settings: {
      fontFamily: 'Ubuntu-Medium',
      fontSize: 16,
      color: COLORS.white,
      marginLeft: 10,
      marginTop: 1
    }
  }) 
export default Todo;