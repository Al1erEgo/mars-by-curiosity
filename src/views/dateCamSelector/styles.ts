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
        gap: 5,
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
        fontSize: 20
    },
    selectItem: {
        backgroundColor: '#eee7df',
        borderWidth: 0,
    },
    datePickerButton: {
        borderWidth:1,
        borderRadius:10,
        borderColor:'gray',
        paddingHorizontal:20,
        paddingVertical:12,
        flexDirection:'row',
        justifyContent:'space-between'
    }
});
