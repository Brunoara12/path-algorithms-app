import React from 'react'

import {
    View,
    StyleSheet,
    Text as TextReact,
} from 'react-native'


import {
    Circle,
    Svg,
    Line,
    Text,
} from 'react-native-svg'

const GraphInfo = ({ graphInfo }) => {
    return (
        <View style={styles.gInfoWhole}>
            <View style={styles.infoBox}>
                <TextReact>Start: {graphInfo.startNode}</TextReact>
                <TextReact>End: {graphInfo.endNode}</TextReact>
                <TextReact>Curr: {graphInfo.currNode}</TextReact>
                <TextReact>Curr Shortest: {graphInfo.shortestLength}</TextReact>

            </View>
            <View style={styles.keyBox}>
                <Svg height="100%" width="100%">

                    < Circle
                        cx='15%'
                        cy='10%'
                        r="10"
                        stroke="black"
                        strokeWidth="1.5"
                        fill="white"
                    />
                    < Circle
                        cx='15%'
                        cy='23%'
                        r="10"
                        stroke="black"
                        strokeWidth="1.5"
                        fill="yellow"
                    />
                    < Circle
                        cx='15%'
                        cy='36%'
                        r="10"
                        stroke="black"
                        strokeWidth="1.5"
                        fill="#d4af37"
                    />
                    < Circle
                        cx='15%'
                        cy='49%'
                        r="10"
                        stroke="black"
                        strokeWidth="1.5"
                        fill="green"
                    />
                    < Circle
                        cx='15%'
                        cy='62%'
                        r="10"
                        stroke="black"
                        strokeWidth="1.5"
                        fill="#9e1a1a"
                    />
                    <Line
                        x1='5%'
                        y1='75%'
                        x2='25%'
                        y2='75%'
                        stroke="grey"
                        strokeWidth="2" />
                    <Line
                        x1='5%'
                        y1='83%'
                        x2='25%'
                        y2='83%'
                        stroke="yellow"
                        strokeWidth="2" />
                    <Line
                        x1='5%'
                        y1='91%'
                        x2='25%'
                        y2='91%'
                        stroke="blue"
                        strokeWidth="2" />
                    <Text
                        x='30%'
                        y='12%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Not Visited</Text>
                    <Text
                        x='30%'
                        y='25%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Current Node</Text>
                    <Text
                        x='30%'
                        y='38%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Visited Node</Text>
                    <Text
                        x='30%'
                        y='51%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Start Node</Text>
                    <Text
                        x='30%'
                        y='64%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">End Node</Text>
                    <Text
                        x='30%'
                        y='77%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Conn Unknown</Text>
                    <Text
                        x='30%'
                        y='85%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Conn Known</Text>
                    <Text
                        x='30%'
                        y='93%'
                        fill="black"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="start">Path to End</Text>
                </Svg>
            </View>
        </View>
    )
}

export default GraphInfo

const styles = StyleSheet.create({
    gInfoWhole: {
        flex: .18
    },
    infoBox: {
        backgroundColor: "#e8f4f8",
        paddingTop: 4,
        paddingLeft: 8,
        flex: .4,
    },
    keyBox: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 1,
        margin: 4,
        backgroundColor: "lightblue",
        flex: .6
    }
});