import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  const noImages = images.length > 0

  return (
    <>
      <h1>{category}</h1>
      <div className="card-grid">
        {!isLoading ? (
          noImages ? (
            images.map((item) => (
              <GifItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.url}
              />
            ))
          ) : (
            <div>No se encontraron imágenes para esta categoría.</div>
          )
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </>
  )
}
