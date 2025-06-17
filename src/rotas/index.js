import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../paginas/home";
import DetalhesAgentes from "../paginas/detalhes";
import Desenvolvedores from "../paginas/desenvolvedores";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack para telas que não devem aparecer no Drawer
function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetalhesAgentes" component={DetalhesAgentes} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default function Rotas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={StackRoutes} options={{ title: "Início" }} />
        <Drawer.Screen name="Desenvolvedores" component={Desenvolvedores} options={{ title: "Desenvolvedores" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}