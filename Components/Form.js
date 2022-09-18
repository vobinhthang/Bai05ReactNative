import React from "react";
import {StyleSheet,View ,Text, TextInput, TextInputBase, Button,Alert } from "react-native";

export default function Form() {
    
    return (
        <View  style={styles.form}>
            <View>
            <TextInput style={styles.inputEmail}
                        placeholder="Số điện thoại hoặc Email"
                        >
            </TextInput>
            <TextInput style={styles.inputPass}
                        placeholder="Mật khẩu">
            </TextInput>
            </View>
            <View style={styles.viewIputLogin}>
            <Button title="Đăng nhập"
                
               ></Button>
            </View>
          
            <View style={styles.ViewiputLink}>
            <Text style={styles.iputLink}
                >
                Quên mật khẩu?
            </Text>
            </View >
            <View style={styles.ViewiputLink}>
                <Text style={styles.iputLink}
                    >
                    Quay lại
                </Text>
            </View>
            
        </View>
    )
  }

  const styles=StyleSheet.create({
    

    inputEmail:{
        height: 50,
        marginTop:20,
        marginHorizontal:20,
        borderWidth: 1,
        padding:10,
        borderColor:"gray"
    },
    inputPass:{
        height: 50,
        borderColor:"gray",
        marginHorizontal:20,
        marginBottom:20,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        padding:10
    },
    
    viewIputLogin: {
        marginHorizontal:20,
        height: 50,
      },

      iputLink:{
        color:'#2664f4',
        textAlign:"center",
        fontWeight:"500"
        
      },
    
      ViewiputLink:{
        marginTop:20
      }
  })
