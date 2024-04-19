import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

export default (() => {
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
          <button class="backBtn" id="back" onclick="window.history.back();">Back</button>
        </div>
      </>
    )
  }

  return NotFound;

}) satisfies QuartzComponentConstructor