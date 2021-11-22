import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Beatriz Nunes" />

      <Role>Offline - 11</Role>
      <UserRow nickname="Carlão do mato" isBot />
      <UserRow nickname="Mage" />
      <UserRow nickname="Higor" />
      <UserRow nickname="Tiago" />
      <UserRow nickname="Diogo" />
      <UserRow nickname="Rafa" />
      <UserRow nickname="Lala" />
      <UserRow nickname="Nat" />
      <UserRow nickname="Vanessa" />
      <UserRow nickname="Lucas" />
      <UserRow nickname="João" />
    </Container>
  )
}

export default UserList
