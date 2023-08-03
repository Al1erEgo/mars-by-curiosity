import {View, Image} from "react-native";
import {useLocalSearchParams} from "expo-router";

const Picture = () => {
    const {photo} = useLocalSearchParams()
    return (
        <View style={{flex:1, width: '100%'}}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={{uri: photo as string}}/>
        </View>
    );
};

export default Picture;