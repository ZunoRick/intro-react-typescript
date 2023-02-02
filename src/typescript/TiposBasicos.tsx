
export const TiposBasicos = () => {
  let nombre: string | number = 'Ricardo'
  const edad: number = 28
  let estaActivo: boolean = true

  const poderes: (string | object)[] = ['Velocidad', 'Volar', 'Visión X']
  return (
    <>
      <h3>Tipos Básicos</h3>
      { nombre }, { edad }
      <hr />
      { poderes.join(', ') }
    </>
  )
}
