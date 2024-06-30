import generatingAnimation from "data-base64:~/assets/generatingAni.gif"
import React from "react"

// import generatingAnimation from "./assets/generatingAni.gif"
interface Message {
  user?: string // Optional user message
  ai?: string // Optional AI message
}

interface ChatAreaProps {
  chatArr: Message[]
  generating: Boolean
}
const ChatArea = ({ chatArr, generating }: ChatAreaProps) => {
  return (
    <div className="flex flex-col gap-5">
      {chatArr.map((message: Message, index: number) => {
        if (message?.user) {
          return (
            <div className="max-w-[80%] text-right ml-auto  ">
              <p className="bg-[#DFE1E7]  px-4 py-2 rounded-md inline-block text-2xl text-zinc-600">
                {message.user}
              </p>
            </div>
          )
        } else if (message?.ai) {
          return (
            <div className="max-w-[80%] text-left">
              <p className="bg-[#DBEAFE] px-4 py-2 rounded-md inline-block text-2xl text-zinc-600">
                {message?.ai}
              </p>
            </div>
          )
        }
        return null // if chat array is empty
      })}
      {/* Show when Ai is generating response */}
      {generating && (
        <div className="max-w-[80%] text-left">
          <div className="bg-[#DBEAFE] px-4 py-2 rounded-md inline-block text-2xl text-zinc-600">
            <img className="size-12" src={generatingAnimation} alt="" />
            {/* generating */}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatArea
