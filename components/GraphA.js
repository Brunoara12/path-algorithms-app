import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'
import {
    Svg,
    Line,
    Text,
} from 'react-native-svg'

import Node from './Node'

const GraphA = forwardRef((props, ref) => {

    const [NodeCoord, setNodes] = useState([
        {
            name: "Oradea",
            coord: { x: 15, y: 5 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 380
        },
        {
            name: "Zerind",
            coord: { x: 10, y: 17 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 374
        },
        {
            name: "Arad",
            coord: { x: 4, y: 28 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 366
        },
        {
            name: "Timisoara",
            coord: { x: 8, y: 54 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 329
        },
        {
            name: "Lugoj",
            coord: { x: 21, y: 61 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 244
        },
        {
            name: "Mehadia",
            coord: { x: 26, y: 75 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 241
        },
        {
            name: "Drobeta",
            coord: { x: 21, y: 88 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 242
        },
        {
            name: "Craiova",
            coord: { x: 38, y: 91 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 160
        },
        {
            name: "Rimnicu Vilcea",
            coord: { x: 34, y: 54 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 193
        },
        {
            name: "Sibiu",
            coord: { x: 29, y: 39 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 253
        },
        {
            name: "Fagaras",
            coord: { x: 48, y: 42 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 176
        },
        {
            name: "Pitesti",
            coord: { x: 50, y: 67 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 100
        },
        {
            name: "Bucharest",
            coord: { x: 65, y: 79 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 0
        },
        {
            name: "Giurgiu",
            coord: { x: 61, y: 95 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 77
        },
        {
            name: "Urziceni",
            coord: { x: 76, y: 72 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 80
        },
        {
            name: "Neamt",
            coord: { x: 66, y: 15 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 234
        },
        {
            name: "Iasi",
            coord: { x: 79, y: 24 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 226
        },
        {
            name: "Vaslui",
            coord: { x: 85, y: 43 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 199
        },
        {
            name: "Hirsova",
            coord: { x: 90, y: 72 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 151
        },
        {
            name: "Eforie",
            coord: { x: 95, y: 89 },
            cost: 9999999999,
            costHeu: 9999999999,
            parent: "Null",
            color: "white",
            visited: false,
            heuDis: 161
        }
    ])

    const [NodePair, setNodePair] = useState([
        { a: "Oradea", b: "Zerind", length: "71", color: "grey" },
        { a: "Arad", b: "Zerind", length: "75", color: "grey" },
        { a: "Arad", b: "Sibiu", length: "140", color: "grey" },
        { a: "Arad", b: "Timisoara", length: "118", color: "grey" },
        { a: "Timisoara", b: "Lugoj", length: "111", color: "grey" },
        { a: "Lugoj", b: "Mehadia", length: "70", color: "grey" },
        { a: "Drobeta", b: "Mehadia", length: "75", color: "grey" },
        { a: "Drobeta", b: "Craiova", length: "120", color: "grey" },
        { a: "Rimnicu Vilcea", b: "Craiova", length: "146", color: "grey" },
        { a: "Rimnicu Vilcea", b: "Sibiu", length: "80", color: "grey" },
        { a: "Fagaras", b: "Sibiu", length: "99", color: "grey" },
        { a: "Fagaras", b: "Bucharest", length: "211", color: "grey" },
        { a: "Pitesti", b: "Bucharest", length: "101", color: "grey" },
        { a: "Pitesti", b: "Rimnicu Vilcea", length: "97", color: "grey" },
        { a: "Craiova", b: "Pitesti", length: "138", color: "grey" },
        { a: "Bucharest", b: "Giurgiu", length: "90", color: "grey" },
        { a: "Bucharest", b: "Urziceni", length: "85", color: "grey" },
        { a: "Hirsova", b: "Urziceni", length: "98", color: "grey" },
        { a: "Hirsova", b: "Eforie", length: "86", color: "grey" },
        { a: "Urziceni", b: "Vaslui", length: "142", color: "grey" },
        { a: "Iasi", b: "Vaslui", length: "92", color: "grey" },
        { a: "Iasi", b: "Neamt", length: "87", color: "grey" },
        { a: "Oradea", b: "Sibiu", length: "151", color: "grey" },
    ])

    const [ConnectedNodePair, setConnectedPair] = useState([])
    const [NodesToTest, setNodesToTest] = useState([])
    let StartNode = {}
    const Nodes = []
    const NodeLines = []
    const [EndNode, setEndNode] = useState({})
    const [stageNum, setStageNum] = useState(1)
    const [isSimulating, setSimulating] = useState(false)
    const [currNode, setCurrNode] = useState({ name: "NULL" })
    const [shortestLength, setShortestLength] = useState(-1)
    useEffect(() => {
        props.onGraphInfo(StartNode.name, EndNode.name, currNode.name, shortestLength, stageNum)
    }, [shortestLength, stageNum]);

    for (const [index, value] of NodeCoord.entries()) {
        if (value.name === "Arad") {
            StartNode = value;
        }
        if (currNode.name === value.name) {
            if (value.name !== EndNode.name) {
                value.color = 'yellow'
            }
        }
        Nodes.push(<Node key={value.name} NodeCoord={value} />)
    }

    for (const [index, value] of NodePair.entries()) {
        const NodeObjA = NodeCoord.find(n => n.name === value.a);
        const NodeObjB = NodeCoord.find(n => n.name === value.b);

        const textX = ((NodeObjA.coord.x - NodeObjB.coord.x) / 2 + NodeObjB.coord.x).toString().concat("%");
        const textY = ((NodeObjA.coord.y - NodeObjB.coord.y) / 2 + NodeObjB.coord.y).toString().concat("%");

        NodeLines.push(
            <React.Fragment key={value.a + value.b}>

                <Line
                    key={value.a}
                    x1={NodeObjA.coord.x.toString().concat("%")}
                    y1={NodeObjA.coord.y.toString().concat("%")}
                    x2={NodeObjB.coord.x.toString().concat("%")}
                    y2={NodeObjB.coord.y.toString().concat("%")}
                    stroke={value.color}
                    strokeWidth="2" />
                <Text
                    key={value.b}
                    x={textX}
                    y={textY}
                    fill="black"
                    fontSize="13"
                    fontWeight="bold"
                    //scale="1.2"
                    textAnchor="middle">{value.length}</Text>
            </React.Fragment>)
    }

    useImperativeHandle(
        ref,
        () => ({
            initSim() {
                alert("Click on any node to view its heuristic value.")
                const tmpEnd = NodeCoord.find(n => n.name === "Bucharest")
                console.log(tmpEnd)
                setEndNode(tmpEnd);

                const startNodePtr = NodeCoord.find(n => n.name === StartNode.name);
                startNodePtr.cost = 0
                setShortestLength(startNodePtr.cost)

                console.log(ConnectedNodePair)
                let tmpNodePairs = ConnectedNodePair
                for (const [index, value] of NodePair.entries()) {
                    const tmpNode = {
                        name: "",
                        connectedNodes: [
                            {
                                name: "",
                                cost: -1,
                            }
                        ]
                    }

                    const foundNode = tmpNodePairs.find(n => n.name === value.a)
                    if (foundNode != undefined) {
                        tmpNode.name = value.a
                        tmpNode.connectedNodes = [
                            ...foundNode.connectedNodes,
                            {
                                name: value.b,
                                cost: value.length
                            }
                        ]
                    } else {
                        tmpNode.name = value.a
                        tmpNode.connectedNodes = [
                            {
                                name: value.b,
                                cost: value.length
                            }
                        ]
                    }
                    const Pairs = tmpNodePairs.filter(n => n.name !== tmpNode.name)
                    tmpNodePairs = [
                        ...Pairs,
                        tmpNode
                    ]
                    ////////////////////////////////////////////
                    const btmpNode = {}
                    const bfoundNode = tmpNodePairs.find(n => n.name === value.b)
                    if (bfoundNode != undefined) {
                        btmpNode.name = value.b
                        btmpNode.connectedNodes = [
                            ...bfoundNode.connectedNodes,
                            {
                                name: value.a,
                                cost: value.length
                            }
                        ]
                    } else {
                        btmpNode.name = value.b
                        btmpNode.connectedNodes = [
                            {
                                name: value.a,
                                cost: value.length
                            }
                        ]
                    }
                    const bPairs = tmpNodePairs.filter(n => n.name !== btmpNode.name)
                    tmpNodePairs = [
                        ...bPairs,
                        btmpNode
                    ]
                }
                setConnectedPair(tmpNodePairs)

            },
            nextStep(stage) {
                let neighborArr = []
                switch (stage) {
                    case 1:
                        console.log("CASE 1")
                        let tCurrNode = { cost: 9999999999 }

                        for (const [index, value] of NodeCoord.entries()) {
                            if (value.cost < tCurrNode.cost) {
                                tCurrNode = value
                                tCurrNode.cost = Number(value.cost)
                            }
                        }

                        tCurrNode.color = "yellow";
                        setCurrNode(tCurrNode)
                        let newNodes = NodeCoord.filter(n => n.name !== tCurrNode.name)

                        setNodes(prevState => ([
                            ...newNodes,
                            tCurrNode
                        ]))

                        setNodesToTest([
                            ...NodesToTest,
                            tCurrNode
                        ])


                        setStageNum(stageNum + 1)
                        break
                    case 2:
                        console.log("CASE 2")

                        console.log(`CURR: ${currNode.name} - ${EndNode.name}`)

                        if (NodesToTest.length == 0 || currNode.name == EndNode.name) {
                            NodesToTest.forEach(n => console.log(`name ${n.name} - ${n.parent}`))

                            let newNodes6 = NodePair
                            let crNode = EndNode
                            console.log(crNode)
                            while (crNode.parent !== "Null") {
                                let prtNode = NodeCoord.find(n => n.name === crNode.parent)
                                console.log("line of end")
                                console.log(crNode)
                                console.log(prtNode)
                                newNodes6 = changeLineColor(crNode, prtNode, 'blue', newNodes6)
                                crNode = prtNode
                            }
                            console.log("END OF NODE PATH")

                            newNodes6.forEach(n => {
                                console.log(n)
                            })

                            setNodePair(newNodes6)
                            setStageNum(stageNum + 2)
                            break
                        }




                        let newNodes1 = NodesToTest
                        newNodes1.sort((n, np) => n.costHeu - np.costHeu)

                        newNodes1.forEach(n => console.log(n))

                        while (newNodes1.length != 0 && newNodes1[0].visited) {
                            console.log("REMOVED")
                            newNodes1.shift()
                        }
                        if (newNodes1.length == 0) {

                            let newNodes6 = NodePair
                            let crNode = EndNode
                            while (crNode.parent !== "Null") {
                                let prtNode = NodeCoord.find(n => n.name === crNode.parent)
                                console.log("line of end")
                                console.log(crNode)
                                console.log(prtNode)
                                newNodes6 = changeLineColor(crNode, prtNode, 'blue', newNodes6)
                                crNode = prtNode
                            }
                            console.log("END OF NODE PATH")

                            newNodes6.forEach(n => {
                                console.log(n)
                            })

                            setNodePair(newNodes6)

                            setStageNum(stageNum + 2)
                            break
                        }
                        console.log("After Reemoving Visited")
                        newNodes1.forEach(n => console.log(n))

                        newNodes1[0].visited = true
                        setCurrNode(newNodes1[0])

                        // Get Neighbors
                        const neighbors = ConnectedNodePair.filter(n => newNodes1[0].name === n.name)[0].connectedNodes

                        let newNodes2 = NodePair
                        console.log("OLD PAIRS")
                        newNodes2.forEach(n => {
                            console.log(n)
                        })
                        console.log("NEIGH:")
                        neighbors.forEach(n => {
                            console.log(n)
                            newNodes2 = changeLineColor(newNodes1[0], n, 'yellow', newNodes2)
                        })

                        setNodePair(newNodes2)
                        console.log("NEW Pairs")
                        newNodes2.forEach(n => {
                            console.log(n)
                        })
                        ///////

                        let newNodeCoord = NodeCoord.filter(n => n.name !== newNodes1[0].name)
                        newNodeCoord = [
                            ...newNodeCoord,
                            newNodes1[0]
                        ]

                        const newNodes3 = []

                        for (const [index, value] of newNodeCoord.entries()) {
                            const tmpNode = {
                                name: value.name,
                                coord: value.coord,
                                cost: Number(value.cost),
                                costHeu: Number(value.costHeu),
                                parent: value.parent,
                                color: value.color,
                                visited: value.visited,
                                heuDis: value.heuDis,

                            }
                            neighbors.forEach(n => {
                                if (n.name === value.name && newNodes1[0].parent !== n.name) {

                                    let PossibleLowerGoal = Number(newNodes1[0].cost) + Number(n.cost)
                                    if (PossibleLowerGoal < value.cost) {

                                        tmpNode.cost = PossibleLowerGoal
                                        tmpNode.costHeu = PossibleLowerGoal + Number(tmpNode.heuDis)
                                        tmpNode.parent = currNode.name
                                    }
                                    if (!n.visited) {
                                        newNodes1.push(tmpNode)
                                    }

                                }
                            })

                            newNodes3.push(tmpNode)
                        }

                        setNodesToTest(newNodes1)

                        console.log("NEW NODES")
                        newNodes3.forEach(n => {
                            console.log(`name: ${n.name} + cost: ${n.cost} + visited ${n.visited} + costHeu ${n.costHeu}`)
                        })
                        //console.log(newNodes3[1].cost)

                        setNodes(newNodes3)

                        // console.log("COLORS")
                        // NodeCoord.forEach(n => console.log(`${n.name} + ${n.color}`))

                        setStageNum(stageNum + 1)


                        break
                    case 3:
                        console.log("CASE 3")
                        NodesToTest.forEach(n => console.log(n))


                        let newNodes5 = NodesToTest
                        newNodes5.sort((n, np) => n.costHeu - np.costHeu)

                        let idx = 0
                        let nextCurr = {}
                        while (newNodes5.length != idx && newNodes5[idx].visited) {
                            newNodes5.splice(0, 1)
                        }
                        if (newNodes5.length == 0) {
                            alert("Finished while checking nodes")
                            break
                        }
                        nextCurr = newNodes5[idx]

                        const visitedNodes = []
                        let tmpNode = {}
                        for (const [index, value] of NodeCoord.entries()) {
                            tmpNode = value
                            if (value.visited || value.name === nextCurr.name) {
                                console.log(`${currNode.name} - ${value.name} = ${nextCurr.name}`)
                                if (value.name === nextCurr.name) {
                                    tmpNode.color = 'yellow'
                                }
                                if (value.name === currNode.name) {
                                    tmpNode.color = '#d4af37'
                                }
                                if (value.name == StartNode.name) {
                                    tmpNode.color = "green"
                                }
                                if (value.name == EndNode.name) {
                                    tmpNode.color = "#9e1a1a"
                                    setEndNode(tmpNode)
                                }
                            }
                            visitedNodes.push(tmpNode)
                        }

                        let visNodes = visitedNodes.filter(n => n.name !== tmpNode.name)

                        console.log("SHORTEST LEN")
                        console.log(shortestLength)
                        if (Number(shortestLength) < nextCurr.cost) {
                            setShortestLength(nextCurr.cost)
                        }
                        setCurrNode(nextCurr)


                        setNodes(
                            visitedNodes
                        )


                        setStageNum(stageNum - 1)
                        break
                    case 4:
                        alert("Completed A Star's Algortihm!")
                        break
                }
            }
        })
    )

    function changeLineColor(n1, n2, c, nNodes) {
        let newNodePair = nNodes

        let tmpNode = {}
        for (const [index, value] of newNodePair.entries()) {
            if (value.a === n1.name) {
                if (value.b === n2.name) {
                    tmpNode = {
                        a: n1.name,
                        b: n2.name,
                        length: value.length,
                        color: c
                    }
                    break
                }
            }
            else if (value.a === n2.name) {
                if (value.b === n1.name) {
                    tmpNode = {
                        a: n2.name,
                        b: n1.name,
                        length: value.length,
                        color: c,
                    }
                    break
                }
            }
        }
        const newPairArr = newNodePair.filter(n => (tmpNode.a !== n.a || tmpNode.b !== n.b))

        newNodePair = [
            ...newPairArr,
            tmpNode
        ]

        return newNodePair

    }


    return (
        <View style={styles.graphBox}>
            <Svg height="100%" width="100%">
                {NodeLines}
                {Nodes}
            </Svg>
        </View >
    )
})

export default GraphA

const styles = StyleSheet.create({
    graphBox: {
        backgroundColor: "lightblue",
        flex: .82,
    }
});