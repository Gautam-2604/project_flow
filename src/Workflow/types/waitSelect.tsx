import { Button, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react';
import {ChevronBarDown} from 'react-bootstrap-icons'

import { useReactFlow } from 'reactflow'


const TIME_GAPS=[
    {name: 'Hours', values:"Hours"},
    {name:'Minutes', values:"Minutes"},
    {name: "seconds", values:"Seconds" },
    {name:"days", values:"Days"}

]



export default function waitSelect() {
    const {setNodes} = useReactFlow();
    const [time, setTime] = useState(0)
    const handleChange = (e: any)=>{
        setTime(e.target.value)
    }
    const onProviderClick= ({name, values}:{name: string; values: string})=>{
        const location = Math.random()* 500;
        setNodes((prevNodes)=>[
            ...prevNodes,
            {
                id:`${prevNodes.length+1}`,
                data:{values, name, time},
                type:"wait",
                position:{x: location, y: location}
            }
        ])
    }
  return (
    <div>
        <Input placeholder='Enter Value' id='time' onChange={(e)=>handleChange(e)}></Input>
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
            Add Lead Source
        </MenuButton>
        <MenuList>
            {TIME_GAPS.map((lead)=>(
                <MenuItem key={lead.values} onClick={()=> onProviderClick(lead)}>
                {lead.name}
                </MenuItem>
            ))}
        </MenuList>

    </Menu>
    </div>
  )
}
