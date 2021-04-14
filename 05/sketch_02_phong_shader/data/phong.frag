#ifdef GL_ES
precision mediump float;
#endif

// Phong Fragment shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;

void main() {
  float amb = 0.2;

  // vec3 reflectionDir = normalize(-reflect(-vertLightDir,vertNormal));
  vec3 reflectionDir = 2.0 * dot(-vertLightDir, vertNormal) * vertNormal + vertLightDir; // that's actually a reflection!
  vec4 spec = 0.2 * vec4(1.0, 1.0, 1.0, 1.0) * pow(max(dot(reflectionDir,-vertLightDir),0.0), 75.0) ;
  float diff = max(0.0, dot(vertLightDir, vertNormal)) * (1.0-amb);
  gl_FragColor = vec4(diff, diff, diff, 1.0-amb) * vertColor
    + spec
    + vec4(amb, amb, amb, amb) * vertColor ;
  
}
