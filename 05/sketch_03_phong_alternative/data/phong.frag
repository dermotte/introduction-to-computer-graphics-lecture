#ifdef GL_ES
precision highp float;
#endif

// uniform float     shininess;
uniform float     ambientLight;
uniform sampler2D diffuse;

varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 lightDirectionView;

void main()
{
    float shininess = 100.0;
    vec3  color     = texture2D(diffuse, vUv).rgb;

    vec3  N         = normalize( vNormal );
    vec3  L         = normalize( -lightDirectionView );
    vec3  V         = normalize( -vPos );
    vec3  H         = normalize( V + L );

    float NdotL     = dot(N, L);
    float NdotH     = dot(N, H);

    float kDiffuse  = max(0.0, NdotL);
    // float kSpecular = (shininess + 2.0) * pow(max(0.0, NdotH), shininess) / (2.0 * 3.14159265);
    float kSpecular = pow(max(0.0, NdotH), shininess);

    vec3 light_col  = color * (kDiffuse + kSpecular);
    gl_FragColor    = vec4(light_col, 1.0);
}