import React from 'react';
import { View, Text, Scrollview,  SwipeableFlatList, TouchableOpacity, StyleSheet,TextInput,KeyboardAvoidingView} from 'react-native';
import SwipeableFl from '../Comps/SwipeableFl';
import { Input } from 'react-native-elements';
import MyHeader from '../Comps/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class ListSc extends React.Component {

    constructor(){
        super();
        this.state={
            listItem : '',
            item:[]
        }
    }
    // it is working now. in header you did not add the font weight properly
    render(){
        return(
            <View style ={{flex:1}} >
                
                <View style={{marginTop:10,flex:0.1,marginBottom:50}}>
                    <MyHeader title='My List' navigation={this.props.navigation}> </MyHeader>
                </View>
                <View style={{flexDirection:"row",alignItems: "center"}}>
                <TextInput style={{width:"77%",borderBottomWidth:2,height:50,marginLeft:5,}}
                placeholder=" Add Items"
                onChangeText={(text)=>{
                    this.setState({
                        listItem:text
                    })
                }} value={this.state.listItem} />

                <TouchableOpacity style ={styles.button }
                    onPress={()=>{}
                        
                    }
                ><Text style={styles.buttonText}>Add</Text></TouchableOpacity>
                </View>
                <SwipeableFl item = {this.state.item }/>
      
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    button:{
        width:"20%",
        marginLeft:5,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#26168e",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      },
})