import {StyleSheet} from "react-native";

export const albumStyles = StyleSheet.create({
    imgCard: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    scrollViewContainer: {
        flex: 0.8,
        width: '100%'
    },
    loadingContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    galleryContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    }
})