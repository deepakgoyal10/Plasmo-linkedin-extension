import React, { Children } from "react"

interface IconProps {
  onClose: () => void
  children: React.ReactNode
}

const BasicModal = ({ children, onClose }: IconProps) => {
  return (
    <div>
      <div
        className="fixed inset-0 z-[12] w-screen h-screen bg-[#00000063] py-10 flex  items-center justify-center "
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClose()
        }}>
        <div
          className="bg-white w-[90%] mt-7 sm:w-[45%] px-2 sm:px-4 py-6 rounded-lg shadow-2xl "
          style={{
            animation: "grow .3s ease-out"
          }}
          onClick={(e) => {
            e.stopPropagation()
          }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BasicModal
