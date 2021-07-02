import  React from "react";
import { Header, Icon } from "react-native-elements";

export default class MyHeader extends React.Component{
  render(){
      return(
        <Header 
            leftComponent = {<Icon name='bars' type='font-awesome' color='black' 
            onPress={()=> this.props.navigation.toggleDrawer()} />}

            centerComponent = {{ text: this.props.title, style: 
              {color:'white',
              fontSize: 15,
              fontWeight: "bold" } }}
        />
      )
  }
} 