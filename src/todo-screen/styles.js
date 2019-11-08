import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingVertical: 40,
        backgroundColor: 'lightcyan',
      },
      android: {
        paddingVertical: 20,
        backgroundColor: 'lemonchiffon',
      }
    }),
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  input: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
     borderWidth: 1,
     borderColor: 'gray'
  },
  scroll: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorButton: {
    margin: 5,
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  selected: {
    borderWidth: 4,
    borderColor: 'white',
  },
  listContainer: {
    flex: 1,
  },
  buttonsContainer: {
    height: 60
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemLabel: {
    color: 'darkgray',
    fontSize: 16,
    marginLeft: 10
  }
});