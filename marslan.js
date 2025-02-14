import { StyleSheet, Text, View, TextInput } from "react-native";

const Marslan = () => {
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput
                style={styles.textInputStyles}
                placeholder='Enter your name'
            />

            <Text>Last Name</Text>
            <TextInput
                style={styles.textInputStyles}
                placeholder='Enter your last name'
            />

            <Text>Phone Number</Text>
            <TextInput
                style={styles.textInputStyles}
                placeholder='Enter your phone number'
                keyboardType='numeric'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',  // Container genişliğini %80 yapıyoruz
        alignItems: 'center',  // Input'ları yatayda ortalıyoruz
        justifyContent: 'center', // Vertical ortalama
        marginTop: 20,  // Üstten boşluk bırakıyoruz
    },
    textInputStyles: {
        borderColor: '#f9f0f9',
        backgroundColor: '#f9f0f9',
        borderWidth: 0.2,
        borderRadius: 10,
        width: '100%',  // TextInput'un genişliğini %100 yapıyoruz (container'dan %80 kalacak)
        height: 40,
        padding: 10,
        marginVertical: 10,
        textAlign: 'center',
    }
});

export default Marslan;