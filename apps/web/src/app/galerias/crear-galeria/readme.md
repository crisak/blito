## Obtener la posición de una imagen (cuadrado, vertical, horizontal)

Instala la biblioteca image-size en tu proyecto React:
`npm install image-size`

```jsx
const fileInput = document.getElementById('tu-input-de-archivo') // Reemplaza con el ID de tu input de archivo

fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = async (e) => {
      const fileContent = e.target.result

      // Obtén las dimensiones de la imagen
      const dimensions = sizeOf(Buffer.from(fileContent))

      // Establece los umbrales para cuadrado, vertical y horizontal
      const squareThreshold = 10 // Puedes ajustar este valor según tus necesidades
      const verticalThreshold = 0.2 // Puedes ajustar este valor según tus necesidades
      const horizontalThreshold = 5 // Puedes ajustar este valor según tus necesidades

      // Calcula la relación entre ancho y alto de la imagen
      const aspectRatio = dimensions.width / dimensions.height

      // Determina el tipo de archivo en función de las proporciones
      let fileType = 'Panorámica'

      if (Math.abs(dimensions.width - dimensions.height) < squareThreshold) {
        fileType = 'Cuadrada'
      } else if (aspectRatio > 1 + horizontalThreshold) {
        fileType = 'Horizontal'
      } else if (aspectRatio < 1 - verticalThreshold) {
        fileType = 'Vertical'
      }

      // Ahora puedes guardar fileType, dimensions.width y dimensions.height en tu base de datos y cargar la imagen en S3
      // Implementa la lógica para cargar en S3 y guardar en la base de datos aquí

      console.log(`Tipo de archivo: ${fileType}`)
      console.log(`Ancho: ${dimensions.width}`)
      console.log(`Alto: ${dimensions.height}`)
    }

    reader.readAsArrayBuffer(file)
  }
})
```
