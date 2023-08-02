import {StyleSheet} from "react-native";

export const dateCamSelectorStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#DCCEBE',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bgImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
    },
    text: {
        fontFamily: 'terminal-dosis'
    },
    inputsBlock: {
        flex: 1,
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
        gap: 20,
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
