import React, { useState, useEffect } from 'react'

import {
    Circle,
    Svg,
    Line,
    Text,
    TouchEvents,
} from 'react-native-svg'

const Node = ({ NodeCoord }) => {

    const [color, setColor] = useState("white");
    const [visited, setVisited] = useState(false);
    const [cost, setCost] = useState(Infinity)
    const [parent, setParent] = useState({ name: "Null", visited: false, cost: Infinity, parent: "Null" })

    const x = NodeCoord.coord.x.toString().concat("%");
    const y = NodeCoord.coord.y.toString().concat("%");
    useEffect(() => {

    });

    function getHeuValue(n) {
        if (n.heuDis) {
            alert(`${n.name}'s heuristic distance is ${n.heuDis}`)
        }
    }

    return (


        <>
            < Circle
                cx={x}
                cy={y}
                r="12"
                stroke="black"
                strokeWidth="1.5"
                fill={NodeCoord.color}
                onPress={() => getHeuValue(NodeCoord)}
            />

            <Text
                x={x}
                y={y}
                fill="black"
                fontSize="16"
                onPress={() => getHeuValue(NodeCoord)}
                textAnchor="middle">{NodeCoord.name}</Text>
        </>

    )
}

export default Node
