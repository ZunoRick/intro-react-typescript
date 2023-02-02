interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number
}

export const ObjetosLiterales = () => {
  const persona: Persona ={
    nombreCompleto: 'Ricardo',
    edad: 28,
    direccion:{
      pais: 'México',
      casaNo: 1150
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          { JSON.stringify(persona, null, 2) }
        </pre>
      </code>
    </>
  )
}
