import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>
                {`Count: ${count.toString()}`}
            </Text>
            <Button title="Arttır" onPress={() => setCount(count + 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Counter;