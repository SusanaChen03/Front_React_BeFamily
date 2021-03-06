![LOGO](./src/IMG/LOGO.png)
# Bienvenidos de BeFamily
## Una aplicaci贸n para toda la familia

## Tabla de contenido

-[Introducci贸n](#introducci贸n) 馃實

-[Stack Tecnol贸gico](#StackTecnol贸gico) 鈿?

-[Descripci贸n](#Descripci贸n) 馃尫

-[Usabilidad](#Usabilidad) 馃憯

-[Rutas de la web](#Rutas) 馃エ

-[Base de datos](#BaseDeDatos) 馃

-[Instalaci贸n](#Instalaci贸n) 馃崟

-[Autora](#Autora) 馃懇鈥嶐煢?

-[Como ayudar](#ComoAyudar) 馃

-[Agradecimientos](#Agradecimientos) 馃憦



## Introducci贸n 馃實
---
Este es un proyecto que nos han mandado desde la academia, consta de crear una aplicaci贸n entera (MVP) con una API RESTful a una base de datos que en este caso he utilizado PHP con laravel y MySQL, y un front con Javascript y React.

El tema era libre de elecci贸n y yo eleg铆 mi proyecto final de mi master de UX/UI, pienso que ser铆a una buena oportunidad de aprendizaje para m铆 el poder comenzar un proyecto desde una idea sin nada a comenzar a investigar sobre ello, estudio de mercado de la necesidad mediante encuestas y entrevistas, obtenci贸n de Insights,  muchos canvas, seguido del dise帽o en Figma, montar un prototipo con todas la funcionalidades de la aplicaci贸n hasta el poder darle "vida" al proyecto, tener una api que haga las funcionalidades que tu necesites y  hacer que funcione de verdad y subirlo a producci贸n para que lo puedan utilizar amigos y compa帽eros.



## Stack Tecnol贸gico 鈿?
---
Las tecnolog铆as utilizadas para la realizaci贸n del Front han sido:

<p align="left">
<a href="https://desarrolloweb.com/home/html" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="javascript" width="40" height="40"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://reactjs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://www.tutorialspoint.com/redux/redux_devtools.htm" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="javascript" width="40" height="40"/></a>
</p>

Adem谩s de ha hecho uso de las siguientes librer铆as/herramientas/tecnolog铆as para el desarrollo del proyecto:

* Entorno: `Node.js`
* ORM: `MySQL`
* Librer铆a de estilos: `Bootstrap`, `Bootswatch`
* Herramienta de despliegue de proyecti Front: `AWS`.


## Descripci贸n 馃尫
---
Esto es un aplicaci贸n como hab铆a comentado en la introducci贸n para que participen toda la familia, consta de elaborar retos entre todos los miembros de la familia o entre ellos, se elaboran los retos a cumplir y se le asigna una recompensa que se har谩 realidad una vez hayan cumplido el reto, los miembros de la familia se comprometen a cumplir tanto los retos como las recompensas asignadas. 
Esto ayuda a que los padres incentiven a los hijos a hacer cosas que no sea abrazar a un dispositivo electr贸nico cuando los padres est茅n ocupados, ayudarles a coger una rutina en la casa para que ayuden a hacer las tareas o simplemente a que aprendan a ser independientes consigo mismo, ejemplo: hacerse la cama todas las ma帽anas, recoger la mesa despu茅s de comer, ayudar a lavar los platos, etc..... 
Es verdad de que hay muchos ni帽os que ya lo hacen de por s铆 pero tambi茅n hay muchos que no y despu茅s de nuestras investigaciones nos hemos dado cuenta de que los ni帽os tienden a hacer m谩s cosas con m谩s ganas con una simple recompensa como la de llevarles al cine el fin de semana para ver una peli que les gusta o una hamburguesa en el restaurante.
Aunque sea un reto temporal con el tiempo el ni帽@ acaba cogiendo buenas costumbres.


## Usabilidad 馃憯
---
Esta aplicaci贸n en el proceso inicial consta de las siguientes vistas y funcionalidades:

* Vista Registro en la ruta `/register`donde cualquier persona puede registrarse con:

```html
Nombre de la familia:
Tu Nombre:
Tu fecha de nacimiento:
Correo electr贸nico:
Contrase帽a:
```

* Vista Login est谩 en la ruta `/login` donde el usuario tiene que introducir su email y su contrase帽a para poder acceder a la aplicaci贸n, si todav铆a no se ha registrado hay un enlace que redirecciona al registro. Una vez que ha hecho login, se redirecciona a la home para poder visualizar los retos.

```html
Correo electr贸nico:
Contrase帽a:
```

* Vista Home en la ruta `/home` est谩n la lista de todos los retos, que podr谩s editar, borrar o simplemente ver detalles de esta con solo clickar encima de la tarjeta.

* Header: Arriba a la izquierda esta el nombre y el logo de la aplicaci贸n que redirecciona de donde est茅s a la /home, luego tienes los botones de retos donde est谩n tus retos, el bot贸n de recompensas donde est谩n todas las recompensas registradas.

* En la barra de header tambi茅n esta el bot贸n de ajustes que te lleva a tu perfil en la ruta `/profile` con tus datos personales y los miembros de tu familia;
En esta vista podr谩s editar tus datos y editar o a帽adir miembros de tu familia.

```html
CREACI脫N DE UN MIEMBRO
nombre:
fecha de nacimiento:
Correo electr贸nico:
Contrase帽a:
```

* Vista de creaci贸n de un reto en la ruta `/createChallenge` tienes el formulario para crear un nuevo reto:

```html
CREACI脫N DE UN NUEVO RETO
Elegir los miembros que van a participar:
Nombre del reto:
Elegir el n煤mero de repeticiones a realizar:
Elegir un color para diferenciar los retos:
Elegir o crear una recompensa:
```

* Vista de creaci贸n de un reto en la ruta `/createRewad` se encuentra el formulario para crear una recompensa para poder utilizarla posteriormente.

```html
CREACI脫N DE UNA NUEVA RECOMPENSA
Nombre de la recompensa:
Elegir una imagen para la recompensa:
Una breve descripci贸n:
Elecci贸n de un color para diferenciar las recompensas:
```

## Rutas de la web 馃エ
---

~~~
  <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute isLoggedIn={logged}> <Home /></ProtectedRoute>}/>
          <Route path="/listChallenges" element={ <ProtectedRoute isLoggedIn={logged}> <ListChallengers /></ProtectedRoute>}/>
          <Route path="/listRewards" element={<ProtectedRoute isLoggedIn={logged}><ListRewards /></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute isLoggedIn={logged}><Profile /></ProtectedRoute>}/>
          <Route path="/createChallenge"element={<ProtectedRoute isLoggedIn={logged}><CreateChallenge /> </ProtectedRoute>}/>
          <Route path="/createChallenge/:id" element={<ProtectedRoute isLoggedIn={logged}><CreateChallenge /></ProtectedRoute>}/>
          <Route path="/createReward" element={<ProtectedRoute isLoggedIn={logged}><CreateReward /></ProtectedRoute>}/>
          <Route path="/createReward/:id" element={<ProtectedRoute isLoggedIn={logged}><CreateReward /></ProtectedRoute>}/>
          <Route path="/addMember"element={<ProtectedRoute isLoggedIn={logged}><AddNewMember /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
~~~

He a帽adido el `ProtectedRoute` para proteger las rutas para que un usuario no pueda entrar en los endpoints si no esta logeado.

## Base de datos 馃
---
Se ha utilizado una base de datos relacionales con MySQL con el lenguaje de PHP con el framework de laravel.
* Se a utilizado el Workbench para el UI de la base de datos.

## Instalaci贸n 馃崟
---
Para poder modificar el proyecto o visualizar el c贸digo:

* Clonar o forkear el repositorio si deseas, ***Susana***: (https://github.com/SusanaChen03/Front_React_BeFamily.git).

* Instalar React y con el comando`npm install` para cargar las dependencias del package.json.

* `npm run start` Ejecuta la app de react en localhost:3000

* Puedes utilizar mi api subido a heroku, la doc est谩 en (https://github.com/SusanaChen03/Php_Api_BeFamily.git).


## Autora 馃懇鈥嶐煢?
---
* [Susana chen](https://github.com/susanachen03)



## Como ayudar 馃
----
* Si deseas colaborar con 茅ste proyecto u otro no dudes en contactar conmigo o solicitar una pull request.
* Mi correo electr贸nico: [grupochen@hotmail.com](mailto:grupochen@hotmail.com)
* Cualquier aporte se puede compensar en una quedada de cervezas o caf茅 para los que no beben cerveza. 


## Agradecimientos 馃憦
---
* Agradecer a *Jose Villanueva* por todo su tiempo, esfuerzo y paciencia para conseguir que cada d铆a sea una mejor programadora.

* Gracias a la academia por ense帽arme todo un mundo nuevo.

* Gracias a todos los usuario que se han le铆do mi readme hasta aqu铆, les invito que entren para probar mi aplicaci贸n.
  



