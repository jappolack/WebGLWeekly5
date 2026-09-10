import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

import { OrbitControls }
from "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js";

// ------------------------------------
// Scene
// ------------------------------------

const scene = new THREE.Scene();

scene.background =
    new THREE.Color(0x333333);

// ------------------------------------
// Camera
// ------------------------------------

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth /
        window.innerHeight,
        0.1,
        1000
    );

camera.position.set(
    8,
    8,
    12
);

// ------------------------------------
// Renderer
// ------------------------------------

const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

// ------------------------------------
// Controls
// ------------------------------------

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

// ------------------------------------
// Ground
// ------------------------------------

const ground =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12,
            0.2,
            12
        ),
        new THREE.MeshPhongMaterial({
            color: 0x777777
        })
    );

ground.position.y =
    -0.1;

scene.add(ground);

// ------------------------------------
// Cube 1
// ------------------------------------

const cube1 =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            1,
            1,
            1
        ),
        new THREE.MeshPhongMaterial({
            color: 0xff4444
        })
    );

cube1.position.set(
    -3,
    0.5,
    0
);

scene.add(cube1);

// ------------------------------------
// Cube 2
// ------------------------------------

const cube2 =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            1,
            1,
            1
        ),
        new THREE.MeshPhongMaterial({
            color: 0x44ff44
        })
    );

cube2.position.set(
    3,
    0.5,
    0
);

scene.add(cube2);

// ------------------------------------
// Sphere
// ------------------------------------

const sphere =
    new THREE.Mesh(
        new THREE.SphereGeometry(
            0.75,
            32,
            32
        ),
        new THREE.MeshPhongMaterial({
            color: 0x4488ff
        })
    );

sphere.position.set(
    0,
    0.75,
    -3
);

scene.add(sphere);

// ------------------------------------
// Pyramid
// ------------------------------------

const pyramid =
    new THREE.Mesh(
        new THREE.ConeGeometry(
            1,
            2,
            4
        ),
        new THREE.MeshPhongMaterial({
            color: 0xffaa00
        })
    );

pyramid.position.set(
        0,
        1,
        3
    );

pyramid.rotation.y =
    Math.PI / 4;

scene.add(pyramid);

// ------------------------------------
// Ambient Light
// ------------------------------------

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        0.2
    );

scene.add(
    ambientLight
);

// ------------------------------------
// Directional Light
// ------------------------------------

const directionalLight =
    new THREE.DirectionalLight(
        0xffffff,
        1.0
    );

directionalLight.position.set(
    5,
    5,
    5
);

scene.add(
    directionalLight
);

// ------------------------------------
// STUDENT AREA
// ------------------------------------

// Create additional lights here

// Example:
//
// const pointLight =
//     new THREE.PointLight(
//         0xff0000,
//         2
//     );
//
// scene.add(pointLight);

// ------------------------------------
// Resize
// ------------------------------------

window.addEventListener(
    "resize",
    () =>
    {
        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);

// ------------------------------------
// Animation
// ------------------------------------

function animate()
{
    requestAnimationFrame(
        animate
    );

    cube1.rotation.y += 0.01;
    cube2.rotation.y -= 0.01;

    controls.update();

    renderer.render(
        scene,
        camera
    );
}

animate();