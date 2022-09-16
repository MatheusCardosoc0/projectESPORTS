import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Games } from '../screens/Games'
import { Home } from '../screens/Home'


const { Navigator, Screen} = createNativeStackNavigator()


export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen 
      name="home"
      options={{headerShown: false}}
      component={Home}/>
      <Screen
      name='games'
      component={Games} />
    </Navigator>
  )
}