import React from 'react'
import {
    View,
    Button,
    Text,
    Image,
    StyleSheet,
} from 'react-native'


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Dijkstra's Algorithm"
                onPress={() =>
                    navigation.navigate('Dijkstra')} />
            <Button
                title="A* Algorithm"
                onPress={() =>
                    navigation.navigate('A*')} />
            <Text style={styles.text}>Pick your Algorithm!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 90,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default HomeScreen
