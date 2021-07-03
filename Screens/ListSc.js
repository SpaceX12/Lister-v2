import React from 'react';
import { View, Text, Scrollview, FlatList, TouchableOpacity, StyleSheet,TextInput,KeyboardAvoidingView} from 'react-native';
import SwipeableFl from '../Comps/SwipeableFl';
import { Input, ListItem } from 'react-native-elements';
import MyHeader from '../Comps/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';

export default class ListSc extends React.Component {

    constructor(){
        super();
        this.state={
            listItem : '',
            requireditem:[]
        }
        this.requestRef = null
    }

    createList = () =>{
      db.collection('list-item').add({
          item_name: this.state.listItem,
          item_status: "remaining"
      })
      console.log(this.state.requireditem)
      this.setState({listItem:""})
    }

    getItemList = () => {
        this.requestRef = db
        .collection("list-item")
        .onSnapshot((snapshot) => {
        var requireditem = snapshot.docs.map((doc) => doc.data());
        this.setState({
          requireditem: requireditem,
        });
      });
    }

    componentDidMount() {
        this.getItemList();
    }
    
    componentWillUnmount() {
        this.requestRef();
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => {
        return (
          <ListItem
            key={i}
            title={item.item_name}
            titleStyle={{ color: "black", fontWeight: "bold" }}
 
            rightElement={
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  db.collection("list-item")
                  .where("item_name", "==",item.item_name)
                  .get()
                  .then((snapshot) => {
                    snapshot.forEach((doc) => {
                      db.collection('list-item').doc(doc.id).delete()
                    });
                  });
                 
                }}
              >
                <Text style={{ color: "green" }}>✔</Text>
              </TouchableOpacity>
            }
            bottomDivider
          />
        );
    };

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
                    onPress={()=>{
                     this.createList()   
                    }
                    }
                ><Text style={styles.buttonText}>Add</Text></TouchableOpacity>
                </View>
                <FlatList
                data={this.state.requireditem}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ></FlatList>
      
            </View>
        )
    }
    
}
/*<SwipeableFl item = {this.state.requireditem }/>*/

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


/*
Array [
  Object {
    "item_name": "But milk",
    "item_status": "remaining",
  },
  Object {
    "item_name": "Hi",
    "item_status": "remaining",
  },
  Object {
    "item_name": "Hi",
    "item_status": "remaining",
  },
]

*/