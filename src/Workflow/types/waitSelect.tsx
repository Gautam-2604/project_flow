import { Button, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronBarDown } from "react-bootstrap-icons"
import { useReactFlow } from "reactflow"

const TIME_GAPS=[
    {name: 'Hours'},
    {name:'Minutes'},
    {name: "seconds"},
    {name:"days"}

]


export default function waitSelect() {
    const {setNodes} = useReactFlow()
    const onTimeClick = ({name}:{name: string})=>{
        const location = Math.random()* 500;
        setNodes((prevNodes)=>[
            ...prevNodes,{
                id:`${prevNodes.length}+1`,
                data:{name},
                type:"wait",
                position:{x: location, y: location}
            }
        ])

    }
  return (
       

    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
            Add Wait Time
        </MenuButton>
        <MenuList>
            
            {TIME_GAPS.map((timegap)=>(
                <MenuItem onClick={()=>onTimeClick(timegap)}>
                    {timegap.name}
                </MenuItem>
            ))}
        </MenuList>
    </Menu>
   
  )
}
