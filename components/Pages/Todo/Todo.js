import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image,  ScrollView, SafeAreaView, } from 'react-native';
import { COLORS } from '../../../constants/theme';
import TodoTitle from './TodoTitle';
import TodoCard from './TodoCard';
import TodoEdit from './TodoEdit';
import TodoAdd from "./TodoAdd";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todo = props => {
  const [saveTodo, setSaveTodo] = useState(false)
  const [tasks, setTasks] = useState([])

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('tasksData', JSON.stringify(data));
    } catch (error) {
      console.log('Ошибка при сохранении данных:', error);
    }
  };

  const loadTasksData = async () => {
    try {
      const data = await AsyncStorage.getItem('tasksData');
      if (data !== null) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.log('Ошибка при загрузке данных:', error);
    }
    return []; // Возвращаем пустой массив, если данных нет
  };
  
  

  const handleDelete = (index) => { // Удаление задания
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveData(updatedTasks);
  };

  const handleAdd = () => { // Добавление пустой карточки
    const newTask = {
      date: "",
      namePair: "",
      task: "",
    };
    setTasks([...tasks, newTask]);
  };


  const onSaveTodo = () => { // Сохранение заданий 
    saveData(tasks);
    setSaveTodo(!saveTodo);
  };

  useEffect(() => {
    loadTasksData().then((data) => { // Достаем задания из памяти телефона
      setTasks(data);
    })
  }, [saveTodo]);



  return ( 
    <View style={{ flex: 1 }}>
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
                    saveData={saveData}
                    tasks={tasks}
                  />
                )
            ))
          ) : (
            <Image style={{ width: '100%', height: 280, marginTop: 20 }} source={require('../../../assets/catslip.jpg')}/>
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