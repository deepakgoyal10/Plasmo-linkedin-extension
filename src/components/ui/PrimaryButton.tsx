import React, { Children, type ReactNode } from "react"

interface PrimaryButton {
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const PrimaryButton = ({ children, type, onClick, ...rest }: PrimaryButton) => {
  return (
    <button
      className="bg-[#3B82F6] text-white px-[13px] py-[7px] rounded-[6px] focus:ring-0 focus:outline-none  font-semibold flex items-center justify-center gap-2 text-2xl"
      type={type}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  )
}

export default PrimaryButton
