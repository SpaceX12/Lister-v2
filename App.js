import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import HomeSc from './Screens/HomeSc';
import { AppDrawerNavigator } from './Comps/AppDrawer'
import ListSc from './Screens/ListSc';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  HomeSc:{screen: HomeSc},
  Drawer:{screen: AppDrawerNavigator},
  
})

const AppContainer =  createAppContainer(switchNavigator);
