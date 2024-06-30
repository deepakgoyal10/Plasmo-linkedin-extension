import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"

import Main from "~components/Main"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(
    "#msg-form-ember139 > div.msg-form__msg-content-container.msg-form__message-texteditor.relative.flex-grow-1.display-flex > div.msg-form__msg-content-container--scrollable.scrollable.relative > div > div.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate"
  )

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return <Main />
}

export default PlasmoOverlay
