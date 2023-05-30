const fs = require('fs');
const path = require('path');

const postsFile = path.join(__dirname, '..', 'utilities', 'posts.json');
// const a = require('../utilities/canciones.json')

const {obtenerPosts, agregarPost} = require('../utilities/consultas')

async function getPost(req, res) {
    const posts = await obtenerPosts()
    return res.send(posts)
}

async function addPost(req, res) {
  const respuesta = await agregarPost(req.body)
  return res.send(respuesta);
};


/* function editarPosts(req, res) {
    const idCancion = req.params.id                                            
    let cancionesAgregdas = JSON.parse(fs.readFileSync(postsFile));     
    const nuevaCancion = req.body;                                              
    cancionesAgregdas = cancionesAgregdas.map((cancion) => {                    
        if(String(cancion.id) === String(idCancion)) {                          
            cancion = nuevaCancion                                              
        }
        return cancion                                                          
    });
    fs.writeFileSync(postsFile, JSON.stringify(cancionesAgregdas));     
    return res.send(nuevaCancion);         
};

function eliminarPosts(req, res) {
    const idCancion = req.params.id;                                            
    let cancionesAgregdas = JSON.parse(fs.readFileSync(postsFile));      
    cancionesAgregdas = cancionesAgregdas.filter((cancion) => String(cancion.id) !== String(idCancion)); 
    fs.writeFileSync(postsFile, JSON.stringify(cancionesAgregdas));      
    return res.send('eliminado exitosamente')     
};
 */
module.exports = {
    addPost,
    getPost
 //   editarPosts,
   // eliminarPosts
};