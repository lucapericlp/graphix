#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_vol;

void main(void){
	vec3 c;
	float l;
  	float z = u_time/5.0;
	for(int i=0;i<3;i++) {
		vec2 p = gl_FragCoord.xy/u_resolution; // normalized co-ords
      	vec2 uv = p;
		p -= .5; // centre origin
		p.x *= u_resolution.x / u_resolution.y; // aspect ratio scaling
		z += .07;
		l = length(p); // euclidean distance from origin
		uv += p/l*(sin(z)+1.0)*abs(sin(l*9.-z-z));
		c[i]=.01/length(mod(uv,1.)-.5);
	}
	gl_FragColor=vec4(c/l,u_time);
}
