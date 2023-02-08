import React from 'react'
import { Stack, Image, Text } from '@chakra-ui/react'
import { type User } from '../interfaces/User'

interface UserCardInfoProps {
  user: User
}

const UserCardInfo: React.FC<UserCardInfoProps> = ({ user }) => {
  return (
    <Stack alignItems="center">
        <Stack width="200px">
            <Image src={user.avatar} />
        </Stack>
        <Text fontSize={25} fontWeight="bold">{user.first_name}</Text>
        <Stack flexDirection="column" justifyContent={'flex-start'}>
            <Text>{`Second Name: ${user.second_name}`}</Text>
            <Text>{`Email: ${user.email}`}</Text>
        </Stack>
    </Stack>
  )
}

export { UserCardInfo }
