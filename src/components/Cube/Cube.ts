/**
 * Vendor
 */

import * as THREE from 'three';

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

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0x9ea8ad,
  wireframe: true,
});

const cube = new THREE.Mesh(boxGeometry, boxMaterial);
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
