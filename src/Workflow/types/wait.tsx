import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { X } from "react-bootstrap-icons";
import { NodeProps, useReactFlow } from "reactflow";

export default function wait({data:{name}, id}: NodeProps<{name: string}>) {
    const {setNodes}= useReactFlow()
    return (
      <Flex
        borderRadius={"24px"}
        border="2px solid #5e5eff"
        alignItems={"center"}
        bg="white"
        p={1}
        pb={1}
        pl={"12px"}
        gap={2}
        width="140px"
      >
        <Box h={4} w={4}></Box>
        <Flex grow="1">
          <Text fontSize="small" mt={"-2px"}>
            {name}
          </Text>
        </Flex>
        <IconButton
          aria-label="Delete Payment Provider"
          pointerEvents="all"
          icon={<X />}
          color="red"
          bg="transparent"
          size="small"
          onClick={() =>
            setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
          }
        />
        </Flex>
  )
}
