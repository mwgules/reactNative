import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cat = () => {
    const name = "Pelus";
    return (
        <View>
            <Text>My name is {name} </Text>
        </View>
    );
};

const Catses = props => {
    return (
        <Text>
            Hello I am a {props.name}!
        </Text>
    );
}


const CustomComponent = () => {

    return (
        <View>
            <Cat />
            <Text>------------------</Text>
            <Catses name="Ugur" />
            <Catses name="Ece" />
            <Catses name="Tugce" />
            <Catses name="Murat" />
        </View>
    );
};


export default CustomComponent;