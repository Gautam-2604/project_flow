import { Edge, Node } from "reactflow";

export const initalEdges: Edge[]=[]
export const initalNodes: Node[]=[{
    
        id: "1",
        data: {},
        position: { x: 5, y: 5 },
        type: "leadSelect",
      
},{
    id:"2",
    data:{},
    position:{x:325,y:5},
    type:"waitSelect"
},{
    id:"3",
    data:{},
    position:{x:200,y:5},
    type:"sendEmail" 
}]