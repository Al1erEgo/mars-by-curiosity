import {View} from "react-native";
import {Image} from 'expo-image';
import {useLocalSearchParams} from "expo-router";
import {pictureStyles as styles} from './styles'
import NavBar from "../../../components/navbar";

//TODO сделать зум

const Picture = () => {
    const {photo, photoId} = useLocalSearchParams()
    return (
        <View style={[styles.container]}>
            <NavBar backButton saveButton invert title={photoId as string} secondaryTitleFirst='Photo ID'/>
            <Image style={[styles.image]} source={photo as string} contentFit='contain'/>
        </View>
    );
};

export default Picture;