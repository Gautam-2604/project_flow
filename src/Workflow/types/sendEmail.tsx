import { Button } from "@chakra-ui/react";
import { useReactFlow } from "reactflow";


export default function sendEmail() {
    const {setNodes}= useReactFlow()
    
    const onButtonClick=()=>{
        const location = Math.random()* 500
        setNodes((prevNodes)=>[
            ...prevNodes,{
                id:`${prevNodes.length}+1`,
                data:{},
                type:'email',
                position:{
                    x:location, y: location
                }

            }
        ])
    }
  return (
    <Button onClick={()=>onButtonClick()}>

        Send Email
    </Button>
  )
}
