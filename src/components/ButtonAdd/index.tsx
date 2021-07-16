import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';





export function ButtonAdd({...rest}: RectButtonProps) {
    
    const navigation = useNavigation();

    
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }
    
    return( 
        
            <RectButton
                style={styles.container}
            >
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
                onPress={handleAppointmentCreate}
            />

            </RectButton>
            
            
        
    )
}