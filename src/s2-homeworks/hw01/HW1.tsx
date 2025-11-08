import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

export type userType = {
  avatar: string,
  name: string,
}

export type messageType = {
  text: string,
  time: string,
}
export type MessageType = {
  id: number,
  user: userType,
  message: messageType,

}

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar,
    name: 'Nikita',
  },
  message: {
    text: 'Hello! How are you?',
    time: '21:00',
  },
}
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar,
    name: 'Egor',
  },
  message: {
    text: 'Hello! I am fine! And you?',
    time: '22:00',
  },
}

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  )
}

export default HW1
