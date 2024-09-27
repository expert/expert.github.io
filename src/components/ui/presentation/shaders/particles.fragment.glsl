uniform float time;
void main (){
  // vec2 st = gl_PointCoord.xy - 0.5;
  float disc = length(gl_PointCoord.xy - vec2(0.5));
  float opacity = 0.3 * smoothstep(0.5,0.4,disc);
  gl_FragColor = vec4(vec3(opacity),1.);
}