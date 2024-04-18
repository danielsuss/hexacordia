import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <>
      <div class="norbert">
        <img class="norbertImg" src="./static/Norbert.webp"></img>
      </div>
      <div class="norbert">
        <p>This lore is yet to be found...</p>
      </div>
    </>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
