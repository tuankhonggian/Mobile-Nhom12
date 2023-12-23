import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, View,Image, TextInput, Touchable, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../theme/theme';
import { FONTFAMILY } from '../theme/theme';
import { BORDERRADIUS } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';


const LoginScreen = ({}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log('Account created')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            console.log('Signed in')
            const user = userCredential.user;
            console.log(user);
            navigation.navigate('Tab');
        })
        .catch(error => {
            console.log(error)
        })
    }


  return (
    <View style={styles.container} >
        <Image style={styles.background} source={require("../assets/app_images/login.jpg")}/>
        {/* Title*/}
        <View >
            <Text style={styles.LoginStyle}> LOGIN</Text>
        </View>

        {/*Form */}
    <View>
    <View style={styles.LoginEmail}>
  <TextInput
    placeholder='Email'
    placeholderTextColor={COLORS.primaryBlackRGBA}
    onChangeText={(text) => setEmail(text)}
  />
</View>

<View style={styles.LoginPass}>
  <TextInput
    placeholder='Password'
    placeholderTextColor={COLORS.primaryBlackRGBA}
    secureTextEntry
    onChangeText={(text) => setPassword(text)}
  />
</View>
        <View>
        <View>
            <TouchableOpacity onPress={handleSignIn} style={styles.ButtonLogin}>
                <Text style={styles.ButtonLoginText}>Login</Text>
            </TouchableOpacity>
        </View>


        <View>
            <TouchableOpacity onPress={handleCreateAccount} style={styles.ButtonCRT}>
                <Text style={styles.ButtonLoginText}>Create Account</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    </View>
</View>
);
};



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    LoginStyle:{
        fontFamily:FONTFAMILY.poppins_semibold,
        color: COLORS.primaryBlackHex,
        fontSize: 36,
        width:315,
        fontWeight: '600',
        letterSpacing:4,
        top:390,
        left: 30,
        textAlign:'center',
    },
    LoginEmail:{
        backgroundColor: COLORS.primaryWhiteHex,
        height: 48,
        width: "85%",
        top:400,
        left: 30,
        borderRadius: BORDERRADIUS.radius_15,
        justifyContent: 'center',
    },
    LoginPass:{
        backgroundColor: COLORS.primaryWhiteHex,
        height: 48,
        width: "85%",
        top:415,
        left: 30,
        borderRadius: BORDERRADIUS.radius_15,
        justifyContent: 'center',
    },
    ButtonLogin:{
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: BORDERRADIUS.radius_15,
        width: "85%",
        left: 30,
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        top:430,
    },
    ButtonCRT:{
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: BORDERRADIUS.radius_15,
        width: "85%",
        left: 30,
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        top:340,
    },

    ButtonLoginText:{
        color: COLORS.primaryWhiteHex,
        fontSize: 22,
        fontWeight: 'bold',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top:335,
        marginTop: 16,
      },
    
      signUpText: {
        color: COLORS.primaryOrangeHex,
        fontWeight: 'bold',
      },

});

export default LoginScreen;