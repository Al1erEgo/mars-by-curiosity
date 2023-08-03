import {StyleSheet} from "react-native";

export const pictureStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center'
    },
    image: {
        flex: 0.8,
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
})