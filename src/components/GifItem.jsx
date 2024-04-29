export const GifItem = ({ id, title, image }) => {
  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}
