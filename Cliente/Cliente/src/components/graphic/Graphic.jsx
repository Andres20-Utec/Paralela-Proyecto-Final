import "./Graphic.css"
export default function Graphic({ imagen }) {
  return (
    <div className="box-imagen">
      <img className="imagen" src={`/assets/images/${imagen}`} />
    </div>
  )
}