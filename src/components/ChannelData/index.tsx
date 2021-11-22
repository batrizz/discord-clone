import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Beatriz Nunes"
            date="12/11/2021"
            content="Olá pessoa, amei conhecer vocês!"
          />
        ))}

        <ChannelMessage
          author="Carlos"
          date="12/11/2021"
          content={
            <>
              <Mention>@Beatriz Nunes</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
