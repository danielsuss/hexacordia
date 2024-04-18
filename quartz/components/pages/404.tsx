import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <>
      <div class="norbert">
        <img class="norbertImg" src="/attachments/Norbert.webp"></img>
      </div>
      <div class="norbert">
        <p>Norbert here, explore some more to find this lore...</p>
      </div>
      <div class="norbert">
        <a href="https://hexacordia.pages.dev/" class="internal">Home</a>
      </div>
    </>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor