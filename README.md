# React Challenge

Recommended to use:

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Redux](https://react-redux.js.org/)
- [MUI](https://mui.com/)
- [Styled Components](https://www.styled-components.com/)

## Instrucciones

- Clona el resositorio
- Instala las dependecias utilizando `npm install` o `yarn`

## Ejecutar el proyecto

En el directorio del proyecto, ejecuta:

#### `npm start` o `yarn start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

## Retos

### Primer reto

- Crea un nuevo componente `FirstChallenge` en `src/containers`
- Utilizando la función `getGifts` del archivo `src/utils.js` listar los GIFTS con su respectiva cantidad de veces que se repite.
  Note: Los regalos que tienen un `_` en su nombre no se deben contabilizar.
  Ejemplo:
  - `"phone laptop _card phone _laptop"` la función debe retornar: `{ phone: 2, laptop: 1 }`

**Bonus:**

- Implementa unit test para la función `getGifts`

### Segundo reto

- Crear un nuevo componente `SecondChallenge` in `src/containers`
- Usa el array `USERS` del archivo `src/utils.js`, lista de usuarios mostrando su avatar, nombre, apellido y edad.
- Implementar la funcionabilidad eliminar usuario.
- Cree un buscador y filtre por nombre o apellido.
- Agregar un select que permita ordenar los usuarios por edad de menor a mayor y de mayor a menor.

**Bonus:**

- Utiliza Material-UI or styled-components para los estilos de los componentes
- Utiliza REDUX y crea el store de users para el manejo de los datos

### Tercer reto

En `src/App.js`:

- Crear las rutas [`/first`](<(http://localhost:3000/first)>), [`/second`](<(http://localhost:3000/second)>), [`/third`](<(http://localhost:3000/third)>) y [`/fourth`](<(http://localhost:3000/fourth)>) cada una con su respectivo componente.

  Nota: Utilizar el archivo `FirstChallenge.js` para la ruta `/first` and `SecondChallenge.js` para la ruta `/second`

- En el archivo `src/components/Header.js` crea unos botones que permitan la navegación entre las 4 rutas creadas utilizando react-router.

**Bonus:**

- Si accede mediante una ruta que no existe debe redireccionar a `/not-found`

### Cuarto reto

En el archivo `src/containers/FourthChallenge.js`:

- Se necesita evitar que se generen renders innecesarios cuando actualiza uno de los inputs.
  Nota: Si se actualiza el input de `Name` el componente `AgeDisplay` no debería generar un render.

**Bonus:**

- Implementa unit test
