import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>eae</Text>

      <Button title='eae'></Button>
      <Button title='Clique me'></Button>

      <StatusBar style="auto" backgroundColor='teal' />
    </View>
  );
}

interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return(
  <TouchableOpacity>
    <Text>{props.title}</Text>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'teal',
    fontSize: 30
  }
});
