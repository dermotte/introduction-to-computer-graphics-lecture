// those are set by Processing, see https://processing.org/tutorials/pshader/
uniform mat4 transform;
uniform mat3 normalMatrix; // normal vector -> view
uniform vec3 lightNormal; // direction of the light (sun vs. point!)

attribute vec4 position;
attribute vec4 color;
attribute vec3 normal;

varying vec4 vertColor;
varying float gouraudFactor;

void main() {
  vec3 vertNormal = normalize(normalMatrix * normal);
  gouraudFactor = dot(vertNormal, -lightNormal);
  vertColor = color;
  gl_Position = transform * position;
}
