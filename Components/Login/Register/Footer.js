import React from "react";
import { View,Text ,StyleSheet, Button} from "react-native";

export default function Footer(){
    return(
        <View>
            <View style={{alignItems:"center",marginTop:100}}>
            <View style={styles.borderText}>
                <View style={styles.viewText}></View>
                    <Text style={styles.text}>Hoặc</Text>
                <View style={styles.viewText}></View>
            </View>
            
        </View>
            <View style={styles.viewInput}>
                <Button title="Tạo tài khoản mới" color={"#85c8ff"} 
                            >
                        
                </Button>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    borderText:{
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        textAlign:"center",marginHorizontal:6
    },
    viewText:{
        borderWidth:1,width:90,height:1,
        borderColor:"gray"
        
    },
    viewInput:{
        marginTop:35,
        marginHorizontal:20,
        height: 50,
        
    }
})