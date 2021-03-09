
varying vec4 vertColor;
varying float gouraudFactor;

void main() {
  float f = max(gouraudFactor, 0.0);
  gl_FragColor = vec4(f,f,f,1)*vertColor;
}
