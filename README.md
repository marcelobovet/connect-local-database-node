# connect-local-database-node

En este proyecto se creó un servidor que disponibilice las rutas GET y POST para consultar y guardar
los posts desde un front en una base de datos PostgreSQL con el paquete pg.

se intentó ordenar el proyecto de la forma mas "modular" posible para poder disponibilizar y modificar archivos de manera eficiente,
donde todos los plugins se encuentra en app.js, las rutas en routes/posts.js, las querys de la base de datos en utilities/consultas.js y 
las operaciones CRUD en services/post.js.
