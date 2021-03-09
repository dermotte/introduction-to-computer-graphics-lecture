uniform mat4 modelview;
uniform mat4 transform;
uniform mat3 normalMatrix;
uniform vec3 lightNormal;

// uniform vec4 lightPosition; // got a directional light!!

attribute vec4 position;
attribute vec4 color;
attribute vec3 normal;

varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;

void main() {
  gl_Position = transform * position;
  vec3 ecPosition = vec3(modelview * position);
  vertNormal = normalize(normalMatrix * normal);

  // vertLightDir = normalize(lightPosition.xyz - ecPosition);
  vertLightDir = -lightNormal;
  vertColor = color;
}
