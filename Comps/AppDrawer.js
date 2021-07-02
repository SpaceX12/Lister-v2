import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeSc from '../Screens/HomeSc';
import ListSc from '../Screens/ListSc'
import CustomSideBarMenu from './CustomSideBar';

export const AppDrawerNavigator = createDrawerNavigator({
    HomeSc:{
        screen: HomeSc
    },
    ListSc:{
        screen:ListSc
    }
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName:'ListSc'
})