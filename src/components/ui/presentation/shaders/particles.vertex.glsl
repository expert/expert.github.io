varying vec2 vUv;
uniform float time;
varying float vProgress;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = 200.5 * (1. / -mvPosition.z);
  // gl_PointSize = 50.0;
}			