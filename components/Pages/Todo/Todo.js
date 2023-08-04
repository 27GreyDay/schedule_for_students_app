import React, { useState } from "react";
import { StyleSheet, View, Image,  ScrollView, SafeAreaView, } from 'react-native';
import { COLORS } from '../../../constants/theme';
import TodoTitle from './TodoTitle';
import TodoCard from './TodoCard';
import TodoEdit from './TodoEdit';
import tasksData from './../../../constants/tasksData'
import TodoAdd from "./TodoAdd";

const Todo = props => {
  const [saveTodo, setSaveTodo] = useState(false)
  const [tasks, setTasks] = useState(tasksData)

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    tasksData.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleAdd = () => {
    const newTask = {
      date: "",
      namePair: "",
      task: "",
    };
    setTasks([...tasks, newTask]);
    tasksData.push(newTask)
  };


  const onSaveTodo = () => {
    setSaveTodo(!saveTodo)
  }
  


  return ( 
    <View style={{height: props.save ? '91.8%' : '100%'}}>
      <TodoTitle save={props.save} setSave={props.setSave} onSaveTodo={onSaveTodo}/>
      
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              props.save ?
                (
                  task.namePair && task.task && task.date &&
                  <TodoCard  
                    key={index}
                    task={task}
                    handleDelete={handleDelete}
                    index={index}
                  />
                ) : (
                  <TodoEdit
                    key={index} 
                    task={task}
                    handleDelete={handleDelete}
                    index={index}
                    saveTodo={saveTodo}
                  />
                )
            ))
          ) : (
            <Image style={{ width: '100%', height: 260, marginVertical: '50%' }} source={require('../../../assets/catslip.jpg')}/>
          )}
          {!props.save && <TodoAdd handleAdd={handleAdd}/>}
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