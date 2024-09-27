varying vec2 vUv;
uniform float time;
varying float vProgress;
uniform vec3 mouse;
void main() {
  vUv = uv;
  vProgress = smoothstep(-1.0,1.0, sin(vUv.x * 8. + time * 0.002));
  vec3 p = position;
  float maxDist = 0.05;
  float dist = length(mouse - p);
  if (dist < maxDist) {
    vec3 dir = normalize(mouse - p);
    dir *= (1. - dist/maxDist);
    p -= dir*0.03;
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}			