import ReactFlow, { addEdge, Connection, useEdgesState, useNodesState } from "reactflow"
import 'reactflow/dist/style.css'
import { Box } from "@chakra-ui/react"
import { useCallback } from "react"
import { initalEdges, initalNodes } from "./WorkflowConstants"

import leadSelect from "./types/leadSelect"
import lead from "./types/lead"
import waitSelect from "./types/waitSelect"
import wait from "./types/wait"
import email from "./types/email"
import sendEmail from "./types/sendEmail"

const nodeTypes={
    "leadSelect":leadSelect,
    "lead": lead,
    "waitSelect": waitSelect,
    "wait": wait,
    "email": email,
    "sendEmail":sendEmail
}



const WorkFlow = () => {
    const [nodes,setNodes,onNodesChange] = useNodesState(initalNodes)
    const [edges,setEdges,onEdgesChange] = useEdgesState(initalEdges)

    const onConnect = useCallback((connection: Connection)=>{
        const edge = {...connection, animated: true}
        setEdges(edges=>addEdge(edge, edges))
    },[])
  return (
    <Box height={"500px"} width="500px" border="1px solid black">
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} />
    </Box>
  )
}

export default WorkFlow
