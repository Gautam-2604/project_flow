import { Button } from "@chakra-ui/react";

import { useReactFlow } from "reactflow";




export default function sendEmail() {
    const {setNodes}= useReactFlow()
    
    const onButtonClick=async ()=>{
        const res = await fetch(`/api/users/agenda`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
           
        });
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
