import React, { useEffect, useState } from "react";
import {View, Text} from "react-native";


const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component is mounted");
    }, []);

    return (
        <View>
            <Text>Count: {count}</Text>
        </View>
    );
};

export default Example;

//? bu kullanimda useEffect fonksiyonu sadece bir kere calisir.
//?  Yani sadece component ilk kez render edildiginde calisir.