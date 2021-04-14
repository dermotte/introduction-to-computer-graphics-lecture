attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

uniform vec3 lightDirection;

varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 lightDirectionView;

void main() 
{
    lightDirectionView = (view * vec4(lightDirection, 0.)).xyz;

    mat4 modelView = view * model;
    vec4 viewPos   = modelView * vec4(position, 1.0);
    vPos           = viewPos.xyz;
    vUv            = uv;
    vNormal        = (modelView * vec4(normal, 0.)).xyz;
    gl_Position    = projection * viewPos;
}