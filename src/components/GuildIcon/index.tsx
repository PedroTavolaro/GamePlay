
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId}: Props) {
    
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
    //const uri = 'data:image/png;base64,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';

    return(
        <View style={styles.container}>
            {
            iconId ?
            <Image 
           source={{ uri }}
           style={styles.image}
           resizeMode='cover'
           />
           :
           <DiscordSvg 
           width={40}
           height={40}
           />
        }
        </View>
            
        
    ) 
           
    
}
                
            