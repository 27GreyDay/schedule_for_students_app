import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.7 },
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },
});

const slideList = Array.from({ length: 30 }).map((_, i) => {
  return {
    id: i,
    image: `https://uprostim.com/wp-content/uploads/2021/04/image053.png`,
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
      <Text style={styles.slideTitle}>{data.title}</Text>
      <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
    </View>
  );
});

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
}
// НАЖАТИЕ
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [buttonColor, setButtonColor] = useState('blue'); // начальный цвет кнопки

  const onPressButton = () => {
    setButtonColor('red'); // изменяем цвет кнопки при нажатии
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPressButton}
    >
      <Text style={styles.buttonText}>Нажми меня</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
// ------------------------------------
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [buttons, setButtons] = useState(['green', 'green', 'green', 'green', 'green', 'green', 'red']);

  const handlePress = (index) => {
    const newButtons = [...buttons];
    newButtons[index] = newButtons[index] === 'green' ? 'red' : 'green';
    const redIndex = newButtons.findIndex((button) => button === 'red');
    newButtons[6] = redIndex === -1 ? 'red' : 'green';
    setButtons(newButtons);
  };

  return (
    <View style={styles.container}>
      {buttons.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => handlePress(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
});

export default App;
///////////////////////////////
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate);
  }, []);

  return (
    <View style={{paddingTop: 40}}>
      {date && (
        <Text>
          {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </Text>
      )}
    </View>
  );
};

export default App;
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const App = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60000); // обновляем каждую минуту

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Text>{date.toLocaleString()}</Text>
  );
};

export default App;

{data.map((obj) => (
  <Text key={obj.mo.id}>{obj.mo.start_time}</Text>
))}
////////////////////////////////////////////////////////
// Если вы используете функциональные компоненты с хуками, вам нужно импортировать React
// и useState из библиотеки react, а затем создать функциональный компонент. Внутри 
// функционального компонента вы можете использовать хук useState для изменения данных:

import React, { useState } from 'react';

const MyComponent = () => {
  const [myData, setMyData] = useState({
    0: [
      {
        id: 1,
        start_time: "8:20",
        end_time: "9:50",
        type_pair: "лекция",
        name_pair: "Структуры данных и алгоритмы",
        auditorium: "12 корпус ауд.230",
        teacher: "Грецова А. П."
      },
      {
        id: 2,
        start_time: "10:00",
        end_time: "11:35",
        type_pair: "практика",
        name_pair: "Возрастная анатомия, физиология и гигиена",
        auditorium: "12 корпус ауд.225В",
        teacher: "Лыкова Е. Ю."
      }
    ],
    1: [
      {
        id: 1,
        start_time: "8:21",
        end_time: "9:50",
        type_pair: "лекция",
        name_pair: "Структуры данных и алгоритмы",
        auditorium: "12 корпус ауд.230",
        teacher: "Грецова А. П."
      },
      {
        id: 2,
        start_time: "10:00",
        end_time: "11:35",
        type_pair: "практика",
        name_pair: "Возрастная анатомия, физиология и гигиена",
        auditorium: "12 корпус ауд.225В",
        teacher: "Лыкова Е. Ю."
      }
    ]
  });

  const updateData = () => {
    const newData = { ...myData }; // Создаем копию объекта myData
    newData[0][0].start_time = "9:00"; // Изменяем значение свойства start_time
    setMyData(newData); // Обновляем состояние компонента
  };

  return (
    <div>
      <button onClick={updateData}>Изменить данные</button>
    </div>
  );
};

export default MyComponent;
