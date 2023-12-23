import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';


interface HeaderBarPops{
    title ?: string;
}
 
 const HeaderBar:React.FC<HeaderBarPops> = ({title}) => {
   return (
     <View style={styles.HeaderContainer}>
        <GradientBGIcon 
        name='menu' 
        color={COLORS.primaryWhiteHex}
        size={FONTSIZE.size_16}
        />
       <Text style={styles.HeaderText}>{title}</Text>
       <ProfilePic />
     </View>
   );
 };
 
 
 const styles = StyleSheet.create({

    HeaderContainer:{
        padding: SPACING.space_30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    HeaderText:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_20,
        color: COLORS.primaryBlackHex,
    },

 });

 export default HeaderBar;