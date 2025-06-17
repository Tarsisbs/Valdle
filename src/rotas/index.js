import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../paginas/home";
import DetalhesAgentes from "../paginas/detalhes";
import Desenvolvedores from "../paginas/desenvolvedores";

export default function Rotas(){
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions = {{ headerShown:false}}>
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="DetalhesAgentes" component={DetalhesAgentes} options={{headerShown:true}}/>
                <stack.Screen name="Desenvolvedores" component={Desenvolvedores} options={{headerShown:true}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}