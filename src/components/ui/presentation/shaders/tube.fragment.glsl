uniform float time;
uniform vec3 color; 
varying vec2 vUv;
varying float vProgress;
uniform vec3 mouse;
void main (){
  vec3 color1 = vec3(1.,0.,0.);
  vec3 color2 = vec3(1.,1.,0.);
  // vec3 finalColor = mix(color1, color2, vProgress);
  float hideCorners = smoothstep(0.,0.1, vUv.x) * smoothstep(1., 0.9, vUv.x);
  vec3 finalColor = mix(color, color * 0.25, vProgress);
  gl_FragColor = vec4(finalColor, hideCorners);
}