import React from 'react';
import { View, TouchableOpacity, StyleSheet,Text, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <>
        <SafeAreaView style={styles.header}>
          
        <TouchableOpacity style={styles.headerItem2} onPress={()=>navigation.navigate('Login1')}>
               <Text style={{color:'white', fontSize:20, fontWeight:'bold', marginLeft:10}}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerItem1} onPress={()=>{navigation.navigate('Notification')}}>
                <FontAwesome name="bell" size={30} color="white"  style={{marginRight:10}}/>
            </TouchableOpacity>
               
          
               
        </SafeAreaView>
            
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop:15,
        flexDirection: 'row',
        justifyContent:'space-between',


    },
  
    headerItem1: {
        marginTop: 37,
    },
   
    headerItem2: {
      
        marginTop: 37,
    },
});

export default Header;