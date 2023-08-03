import {StyleSheet} from "react-native";

export const dateCamSelectorStyles = StyleSheet.create({
    bgImage: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'terminal-dosis'
    },
    inputsBlock: {
        flex: 0.48,
        width: '90%',
        gap: 20,
        justifyContent: "flex-end"
    },
    inputGroup: {
        gap: 5,
    },
    select: {
        backgroundColor: '#eee7df',
        borderWidth: 0,
        height: 60,
        alignItems: 'center',
    },
    selectInput: {
        fontSize: 18
    },
    selectItem: {
        backgroundColor: '#eee7df',
        borderWidth: 0,
        zIndex: 100,
        position: "absolute",
        width: '100%',
        top: '88%'
    },
    datePickerButton: {
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:12,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    exploreButton: {
        backgroundColor: '#BF2E0E',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exploreButtonText: {
        fontFamily: 'terminal-dosis-medium',
        color: '#FFFFFF',
        fontSize: 18,
    }
});
