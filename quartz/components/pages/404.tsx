import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <>
      <div class="norbert">
        <img class="norbertImg" src="./static/Norbert.webp"></img>
      </div>
      <div class="norbert">
        <p>Norbert here, explore some more to find this lore...</p>
      </div>
    </>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
