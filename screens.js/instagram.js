import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';



export default class instagram extends React.Component{
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
                   <Text>instagram</Text>
                </TouchableOpacity>
            </View>
                    )
    }

