import React, { useEffect, useState } from 'react'

import { Stack } from '@chakra-ui/react'
import { useQuery } from 'react-query'

import { UserListItem, UserCardInfo } from '../components'
import { type User } from '../interfaces/User'
import { fetchUsers } from '../services/userService'

const UserList = (): JSX.Element => {
  const [selectedUser, setSelectedUser] = useState < User | null >(null)
  const { data, isLoading } = useQuery<User[]>('getUsers', fetchUsers)

  useEffect(() => {
    if (data !== null && data !== undefined && data.length > 0) {
      setSelectedUser(data[0])
    }
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (data == null) return <div></div>

  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center" backgroundColor="yellow.200">
      <Stack padding={2} backgroundColor="orange.100" width={800} flexDirection={'row'} justifyContent="center" alignItems="center">
        <Stack justifyContent="center" sx={{ overflow: 'auto', scrollbarWidth: 0 }} height="600px" spacing={0}>
          {data?.map((user) => (
            <UserListItem onSelectedUser={setSelectedUser} key={user.id} user={user} />
          ))}
        </Stack>
        <Stack height="600px" flexDirection="column" width={400} alignItems="center" justifyContent="center">
          {(selectedUser != null) && (
            <UserCardInfo user={selectedUser} />
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default UserList
