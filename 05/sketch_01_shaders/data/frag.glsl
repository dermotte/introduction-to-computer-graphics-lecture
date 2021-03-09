
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;

void main() {
  float amb = 0.1;
  float diff = max(0.0, dot(vertLightDir, vertNormal)) * (1.0-amb);
  gl_FragColor = vec4(diff, diff, diff, 1.0-amb) * vertColor
    + vec4(amb, amb, amb, amb) * vertColor ;
}
