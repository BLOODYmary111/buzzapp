import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';



export default class facebook extends React.Component{
    constructor()
    {
        super();

        }
    }

    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
            onPress={}
            style={styles.scanButton}>
                   <Text>facebook</Text>
                </TouchableOpacity>
            </View>
                    )
    }

