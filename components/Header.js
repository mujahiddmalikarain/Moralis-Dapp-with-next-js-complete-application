import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({isAuthenticated, isAuthenticating, user, authenticate, logout, isLoggingOut}) {
    
    return(
        <header>
            <Flex justifyContent="space-between" bg="purple.400" color="white" px={10} py={6}>
                <Center>
                    <Text fontSize='xl'>
                        LayoTrade
                    </Text>
                </Center>
                <Center>
                    <Text fontSize='xl'>
                    {user.getUsername()}
                    </Text>
                    <Button ml="4" colorScheme="messenger" onClick={logout} disabled={isLoggingOut}>logout</Button>
                </Center>
            </Flex>
        </header>
    )
}