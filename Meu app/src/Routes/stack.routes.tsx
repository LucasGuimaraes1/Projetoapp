import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import color from '../Styles/color';
import Login from '../Pages/Login/Login';
import Welcome from '../Welcome/Welcome';
import NewPaciente from '../Pages/NewPaciente/NewPaciente';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: color.white
            }
        }}
    >

        <stackRoutes.Screen
            name="Login"
            component={Login}
        />
        <stackRoutes.Screen
            name="NewPaciente"
            component={NewPaciente}
        />
      
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
     
        
       


    </stackRoutes.Navigator>
)

export default AppRoutes;