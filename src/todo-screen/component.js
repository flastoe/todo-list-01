import React from 'react';
import {
  TouchableOpacity,
  View, Text, TextInput, ScrollView, Button, FlatList
} from 'react-native';
import styles from './styles';

const colors = [
  'red',
  'yellow',
  'blue',
  'orange',
  'black',
  'pink',
  'green',
  'brown',
  'cyan',
  'magenta'
];

const ColorButton = ({
  color,
  selected,
  onPress
}) => (
  <TouchableOpacity key={color} style={[
    styles.colorButton,
    { backgroundColor: color },
    selected && styles.selected,
  ]} onPress={onPress} />
)

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <View style={[
      styles.colorButton,
      { backgroundColor: item }
    ]} />
    <Text style={styles.itemLabel}>{item}</Text>
    <Button title="Done" />
  </View>
);

const TodoComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput style={styles.input} placeholder="Todo..." />
      <View style={styles.buttonsContainer}>
      <ScrollView
          horizontal
          contentContainerStyle={styles.scroll}>
          {colors.map(color => <ColorButton key={color} color={color} />)}
        </ScrollView>
        </View>
      <Button title="Agregar" />
      <View style={styles.listContainer}>
        <FlatList
          data={colors}
          keyExtractor={(props, index) => {
            return `${index}`
          }}
          renderItem={renderItem}
        />
      </View>
    </View>);
}

export default TodoComponent;