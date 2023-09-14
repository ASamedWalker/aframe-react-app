import "aframe";
import "aframe-particle-system-component";
import "aframe-mountain-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";

const App = () => {
  return (
    <Scene stats>
      <a-assets>
        <img
          id="groundTexture"
          src="https://cdn.aframe.io/a-painter/images/floor.jpg"
        />
        <img
          id="skyTexture"
          src="https://cdn.aframe.io/a-painter/images/sky.jpg"
        />
      </a-assets>

      <Entity
        primitive="a-plane"
        position="0 0 -4"
        rotation="-90 0 0"
        width="100"
        height="100"
        src="#groundTexture"
      />
      <Entity primitive="a-light" type="ambient" color="#445451" />
      <Entity primitive="a-light" type="point" intensity="1" position="2 4 4" />
      <Entity primitive="a-camera">
        <Entity
          primitive="a-cursor"
          animation__click={{
            property: "scale",
            startEvents: "click",
            from: "0.1 0.1 0.1",
            to: "1 1 1",
            dur: 150,
          }}
        />
      </Entity>
      <Entity
        text={{
          value: "Hello, This is my A-Frame React Project!",
          align: "center",
        }}
        position={{ x: 0, y: 2, z: -1 }}
      />
      <Entity
        primitive="a-sky"
        height="2048"
        radius="30"
        src="#skyTexture"
        theta-length="90"
        width="2048"
      />
      <Entity
        primitive="a-box"
        position="-1 0.5 -3"
        rotation="0 45 0"
        color="#4CC3D9"
      />
      <Entity
        primitive="a-sphere"
        position="0 1.25 -5"
        radius="1.25"
        color="#EF2D5E"
      />
      <Entity
        primitive="a-cylinder"
        position="1 0.75 -3"
        radius="0.5"
        height="1.5"
        color="#FFC837"
      />
      <Entity
        id="river"
        geometry={{ primitive: "plane", width: 100, height: 100 }}
        material={{ color: "#aaf", shader: "flat", opacity: 0.6 }}
        position={{ x: 10, y: 0, z: 0 }}
        sound={{
          src: "url(https://cdn.aframe.io/basic-guide/audio/backgroundnoise.wav)",
          autoplay: true,
          loop: true,
        }}
      />
    </Scene>
  );
};

export default App;
