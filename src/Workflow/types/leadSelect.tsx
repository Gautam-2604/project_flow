import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {ChevronBarDown} from 'react-bootstrap-icons'

import { useReactFlow } from 'reactflow'

const LEAD_SOURCE = [
    {code: "Li", name:"LinkedIn"},
    {code: "Ig", name:"Instagram"},
    {code: "Fb", name:"Facebook"},
    {code: "Em", name:"Email"},
    {code: "Tk", name:"TikTok"},

]



export default function leadSelect() {
    const {setNodes} = useReactFlow();
    const onProviderClick= ({name, code}:{name: string; code: string})=>{
        const location = Math.random()* 500;
        setNodes((prevNodes)=>[
            ...prevNodes,
            {
                id:`${prevNodes.length+1}`,
                data:{code, name},
                type:"lead",
                position:{x: location, y: location}
            }
        ])
    }
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
            Add Lead Source
        </MenuButton>
        <MenuList>
            {LEAD_SOURCE.map((lead)=>(
                <MenuItem key={lead.code} onClick={()=> onProviderClick(lead)}>
                {lead.name}
                </MenuItem>
            ))}
        </MenuList>

    </Menu>
  )
}
