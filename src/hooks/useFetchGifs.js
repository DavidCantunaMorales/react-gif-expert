import { useEffect, useState } from 'react'

import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  /*
  Esto es lo mismo que hacer el useEffect de abajo, 
  pero si la funcion se necesita en otro lugar, se puede hacer esto.
   
  const getImages = useCallback(async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }, [category, setImages]); // getImages will only change if category or setImages changes
  
  useEffect(() => {
    getImages();
  }, [getImages]);

  */

  // No da un warning en el navegador solo en el eslint
  useEffect(() => {
    // Hacer esto si la funcion solo se esta utilizando aqui
    const getImages = async () => {
      const newImages = await getGifs(category)
      setImages(newImages)
      setIsLoading(false)
    }

    getImages()
  }, [category])

  return {
    images,
    isLoading
  }
}
