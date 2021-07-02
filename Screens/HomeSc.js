import * as React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet, ScrollView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeSc extends React.Component{
 
    constructor(){
        super();
        this.state = {
            isMVisible : false
        }
    }

    showModal = () =>{
        return(
            <Modal  
                animationType = 'slide'
                visible = { this.state.isMVisible }
                transparent = { true }
            >
                <ScrollView style = {{flex:1,backgroundColor:"white"}}>
                    <View style = {{flex:2,
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Text style={styles.title}> Instructions </Text>
                    </View>
                    
                    <View>
                        <Text style={styles.inst}>
                            Press on the 'Countinue' button 
                            to make your  list!

                
                        </Text>
                        <Text style={styles.inst}>
                            Add items by simply clicking on 
                            the 'Add' button after typing
                            the name of the item in the 
                            text input
                        </Text>
                    </View>

                    <TouchableOpacity style={[styles.button,{alignSelf:"center"}]}
                    onPress={()=>{
                        this.setState({
                            isMVisible : false
                        })    
                    }
                    }>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Modal>

            
        );
    }


    render(){
        return(
            <View style={{flex:1, alignItems:'center'}}>
                {this.showModal()}
                <View style={{flex:0.3}}>
                    <Image style = {styles.imageIc}
                        source={require('../Images/List.png')}
                    />
                </View>
                <View style={{flex:0.7}}> 
                    <TouchableOpacity style ={styles.button}
                        onPress={()=>{
                            this.setState({
                                isMVisible : true
                            })
                        }}
                    >
                        <Text style={styles.buttonText}>Instructions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button}
                        onPress={()=>{this.props.navigation.navigate('ListSc')}}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    imageIc : {
        marginTop:80,
        height:RFValue(130),
        width:RFValue(130),
        alignContent:'center',
        borderRadius:50
    },
    title:{
        marginTop:60,
        fontWeight: 'bold',
        fontSize: RFValue(30),
        color: 'grey'
    },
    inst:{
        fontStyle:'italic',
        fontSize:RFValue(20),
        padding:RFValue(40)
    },
    button:{
        marginTop:100,
        width:RFValue(200),
        height:RFValue(100),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"red",
        shadowColor: "maroon",
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