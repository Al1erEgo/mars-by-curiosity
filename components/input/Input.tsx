import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

type InputProps = {
    title: string
    changeTitle: (title: string)=> void
}

export const Input = ( {title, changeTitle}: InputProps) => {
    const [value, setValue] = useState<string>(title)

    return (
        <View style={[{flexDirection: 'row'}]}>
            <TextInput
                style={[styles.input]}
                value={value}
                onChangeText={setValue}/>
            <Button title={'v'} onPress={()=>changeTitle(value)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 14,
        width: '80%',
        fontSize: 14,
        backgroundColor: '#fff',
    }
});
