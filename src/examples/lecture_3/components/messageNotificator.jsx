import { useState } from "react"

const MessageNotificator = ({ msg }) => {
  const [isMsgRead, setIsMsgRead] = useState(false)

  const handleReadMsg = () => {
    setIsMsgRead(!isMsgRead)
  }

  return (
    <div>
      {msg && (
        <p>
          You have new message:{" "}
          <span style={{ fontWeight: `${isMsgRead ? "bold" : "normal"}` }}>
            {msg}
          </span>
        </p>
      )}
      <button onClick={handleReadMsg}>{`${
        isMsgRead ? "Mark as unread" : "Read Message"
      }`}</button>
    </div>
  )
}

export default MessageNotificator
