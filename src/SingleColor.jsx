import { toast } from "react-toastify"

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success("Color copied to clipboard successfully")
      } catch (error) {
        toast.error(error.message)
      }
    } else {
      toast.error("Failed to copy color to clipboard")
    }
  }

  return (
    <article
      className={index > 10 ? "color color-light " : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex.toUpperCase()}</p>
    </article>
  )
}
export default SingleColor
