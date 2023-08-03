import {View} from "react-native";
import { Image } from 'expo-image';
import {useLocalSearchParams} from "expo-router";

//TODO сделать зум

const Picture = () => {
    const {photo} = useLocalSearchParams()
    return (
        <View style={{flex:1, width: '100%', backgroundColor: 'black', alignItems: 'center'}}>
            <Image style={{width: '90%', height: '100%', resizeMode: 'contain', borderRadius: 10}} source={photo as string} contentFit='contain'/>
        </View>
    );
};

export default Picture;