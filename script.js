console.log(THREE)
console.log("Hello World")




// Scene, set of movie set like actor light something like that
const scene = new THREE.Scene()

//Object using Mesh
//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial ({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {

    width: 800,
    height: 600
}

// Camera //the fielf of view, aspect ratio it's like width and height
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 0
camera.position.y = 0

scene.add(camera)

// Renderer the scene from the camera point of view  that result drawn into canvas
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer ({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)









