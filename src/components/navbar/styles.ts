import {StyleSheet} from "react-native";

export const navBarStyles = StyleSheet.create({
    container: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 30,
        width: '100%',
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '80%',
        borderColor: 'red',
        borderWidth: 2
    },
    backContainer: {
        height: '40%',
        width: '10%',
        justifyContent: "center",
        alignItems: 'flex-end',
        padding: 10,
        borderColor: 'red',
        borderWidth: 2
    },
    title: {
        fontFamily: 'terminal-dosis-semibold',
        fontSize: 25,
        borderColor: 'red',
        borderWidth: 2
    },
    secondaryTitle: {
        fontFamily: 'terminal-dosis',
        fontSize:15
    }
})