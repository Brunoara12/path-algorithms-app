import React, { useState, useRef, useEffect } from 'react'

import {
    View,
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native'
import GraphD from './GraphD'
import GraphInfo from './GraphInfo'

const DijkstraAlgo = ({ navigation }) => {


    const graphRef = useRef()
    const [stage, setStage] = useState(1)
    const [GraphInfoObj, setGraphInfoObj] = useState({})
    const [isSimulating, setSimulating] = useState(false)
    function handleGraphInfo(startNode, endNode, currNode, shortestLength, stageNum) {
        setGraphInfoObj({
            startNode: startNode,
            endNode: endNode,
            currNode: currNode,
            shortestLength: shortestLength,
        })
        setStage(stageNum)
    }

    useEffect(() => {

    }, [graphRef])

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableHighlight style={styles.button}
                    onPress={() => { navigation.navigate('Home') }}
                    underlayColor="#72bcd4">
                    <Text>HOME</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                    onPress={() => graphRef.current.initSim()}
                    underlayColor="#72bcd4">
                    <Text>START SIMULATION</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                    onPress={() => graphRef.current.nextStep(stage)}
                    underlayColor="#72bcd4">
                    <Text>NEXT STEP</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.graphRow}>
                <GraphInfo graphInfo={GraphInfoObj}>

                </GraphInfo>
                <GraphD
                    onGraphInfo={handleGraphInfo}
                    simulationStarted={isSimulating}
                    ref={graphRef}
                >

                </GraphD>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //height: 200,
        flex: 1,
    },
    buttons: {
        backgroundColor: '#e8f4f8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: .12,
    },
    button: {
        marginHorizontal: 70,
        backgroundColor: 'lightblue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: .8,
        borderColor: '#72bcd4',
    },
    graphRow: {
        flexDirection: 'row',
        flex: .9,
    }
});

export default DijkstraAlgo
