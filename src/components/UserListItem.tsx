import React from 'react'
import { Stack, Image, Text } from '@chakra-ui/react'
import { type User } from '../interfaces/User'

interface UserListItemProps {
  user: User
  onSelectedUser: (user: User) => void
}

const UserListItem: React.FC<UserListItemProps> = ({ user, onSelectedUser }) => {
  return (
    <Stack onClick={() => { onSelectedUser(user) }} _hover={{ backgroundColor: 'gray', cursor: 'pointer' }} border={'0.5px solid gray'} marginTop={0} padding={5} backgroundColor={'red.400'} width={200} flexDirection="row" justifyContent='space-between' alignItems="center">
        <Image flexGrow={0} width={'50px'} src={user.avatar} marginRight={5} />
        <Stack flexGrow={1} justifyContent="center">
            <Text>{user.first_name}</Text>
        </Stack>
    </Stack>
  )
}

export { UserListItem }
