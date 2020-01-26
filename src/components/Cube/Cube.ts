/**
 * Vendor
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
const field = document.getElementById('field');

renderer.setSize(window.innerWidth, window.innerHeight);
field!.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const controls = new OrbitControls(camera, renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

const cubeMaterials = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('src/assets/images/pic-1.png'),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('src/assets/images/pic-2.png'),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('src/assets/images/pic-3.png'),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('src/assets/images/pic-4.png'),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('src/assets/images/pic-5.png'),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('src/assets/images/pic-6.png'),
    side: THREE.DoubleSide,
  }),
];

const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
scene.add(cube);

camera.position.z = 5;

/**
 * Export
 */

export const renderCube = () => {
  requestAnimationFrame(renderCube);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
