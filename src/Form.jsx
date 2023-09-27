import { useState } from "react"

const Form = ({ addColor }) => {
  const [color, setColor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className="container">
      <h4>Click to Generate:</h4>

      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
