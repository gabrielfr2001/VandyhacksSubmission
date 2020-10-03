import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)