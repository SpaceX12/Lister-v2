import * as React from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    View
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import db from '../config';
import { SwipeListView } from "react-native-swipe-list-view";

export default  class SwipeableFl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:this.props.requireditem
        }
    }
    componentDidMount(){
      console.log(" in swipe list", this.props.requireditem)
    }

    updateMarkAsdone = item => {
        db.collection("list-item")
          .doc(item.doc_id)
          .update({
            item_status: "done"
          });
    };
    
    onSwipeValueChange = swipeData => {
    var allNotifications = this.state.allNotifications;
    const { key, value } = swipeData;
    if (value < -Dimensions.get("window").width) {
        const newData = [...allNotifications];
        this.updateMarkAsread(allNotifications[key]);
        newData.splice(key, 1);
        this.setState({ allNotifications: newData });
    }
    };

    renderItem = data => (
        <Animated.View>
          <ListItem
            title={data.item.item_name}
            titleStyle={{ color: "black", fontWeight: "bold" }}
            bottomDivider
          />
        </Animated.View>
    );

    renderHiddenItem = () => (
        <View style={styles.rowBack}>
          <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
            <Text style={styles.backTextWhite}>Mark as done</Text>
          </View>
        </View>
      );

    render(){
        return(
            <View style={styles.container}>
            <SwipeListView
              disableRightSwipe
              data={this.state.item}
              renderItem={this.renderItem}
              renderHiddenItem={this.renderHiddenItem}
              rightOpenValue={-Dimensions.get("window").width}
              previewRowKey={"0"}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              onSwipeValueChange={this.onSwipeValueChange}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1
    },
    backTextWhite: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "center",
      alignSelf: "flex-start"
    },
    rowBack: {
      alignItems: "center",
      backgroundColor: "#29b6f6",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 15
    },
    backRightBtn: {
      alignItems: "center",
      bottom: 0,
      justifyContent: "center",
      position: "absolute",
      top: 0,
      width: 100
    },
    backRightBtnRight: {
      backgroundColor: "#29b6f6",
      right: 0
    }
  });