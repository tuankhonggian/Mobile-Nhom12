import React,{useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const Welcome = createBottomTabNavigator();


const WelcomeScreen = ({  }) => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Chuyển đến màn hình TabNavigator (sử dụng tên màn hình đã đặt)
    navigation.navigate('Tab');
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/app_images/WELCOME.png')} style={styles.background} />
      <Text
      style={styles.text1}
      >Coffee so good, your taste buds will love it.</Text>
      <Text
      style={styles.text2}
      >The best grain, the finest roast, the powerful flavor.</Text>
      <View style={styles.content}>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted} >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text1:{
        
        fontFamily:'Sora',
        color: COLORS.primaryWhiteHex,
        fontSize: 34,
        width:315,
        fontWeight: '600',
        lineHeight: 42.84,
        letterSpacing:2,
        top:500,
        left: 30,
        textAlign:'center',
    },
    text2:{
        
        fontFamily:'Sora',
        color: '#A9A9A9',
        fontSize: 14,
        width:315,
        fontWeight: '600',
        lineHeight: 21.56,
        letterSpacing:2,
        top:500,
        left: 30,
        textAlign:'center',
    },


    container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 70,
  },
  getStartedButton: {
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 130,
    alignItems: 'center',
    top:60,
  },
  getStartedButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;