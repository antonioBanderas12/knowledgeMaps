import * as THREE from 'three';
//import { io } from 'socket.io-client'
//const socket = io('http://localhost:3000');
import { Group, TextureLoader } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


//scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const textureLo = new TextureLoader()

// TODO: do we need this?
var originalZoom = 11;
var controlMode = 0;

//const controls = new OrbitControls(camera, renderer.domElement);


// mode default positions
var modeZeroPostition = new THREE.Vector3(0, 0, 7);
var modeOnePostition = new THREE.Vector3(0, 0, 17);
var modeTwoPostition = new THREE.Vector3(0, 0, 3);

var modeZeroRotation = new THREE.Euler(0, 0, 0, 'XYZ');

var modeOneOffsetX = -70
var modeTwoOffsetX = 30
var modeTwoOffsetZ = 1

camera.position.copy(modeZeroPostition);


//files array
    var objectIndex = [{
// mode3: showroom animals
      'name': 'A17',
      'type': 'Scan',
      'text': 'Vetulicola cuneata',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX,
      'posY': '0',
      'posZ': '-4.5',
    },
    {
      'name': 'A02',
      'type': 'Scan',
      'text': 'Charnia masoni',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX-4,
      'posY': '-3',
      'posZ': '-3',
    },
    {
      'name': 'A03',
      'type': 'Scan',
      'text': 'Charniodiscus spinosus',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX-2,
      'posY': '-0.7',
      'posZ': '-3',

    },
    {
      'name': 'A04',
      'type': 'Scan',
      'text': 'Cloudina riemkeae',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX,
      'posY': '0',
      'posZ': '-3',

    },
    {
      'name': 'A05',
      'type': 'Scan',
      'text': 'Cotyledion tylodes',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX +1,
      'posY': '-1',
      'posZ': '-3',

    },
    {
      'name': 'A06',
      'type': 'Scan',
      'text': 'Cricocosmia jinningensis',
      'rotating': false,
      'scale': '1.0',
      'posX':modeTwoOffsetX+0.3,
      'posY': '-0.7',
      'posZ': '-2',

    },
    {
      'name': 'A07',
      'type': 'Scan',
      'text': 'Eoredlichia intermedia',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX +2,
      'posY': '0',
      'posZ': '-2',

    },
    {
      'name': 'A08',
      'type': 'Scan',
      'text': 'Fractofusus andersoni',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX,
      'posY': '1',
      'posZ': '-5',

    },
    {
      'name': 'A09',
      'type': 'Scan',
      'text': 'Swartpuntia germsi',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX,
      'posY': '-1',
      'posZ': '-4',

    },
    // {
    //   'name': 'A10',
    //   'type': 'Scan',
    //   'text': 'Haootia quadriformis',
    //   'rotating': false,
    //   'scale': '1.0',
    //   'posX': modeTwoOffsetX +2,
    //   'posY': '0',
    //   'posZ': '-3',

    // },
    {
      'name': 'A11',
      'type': 'Scan',
      'text': 'Lingulella chengjiangensis',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX-2,
      'posY': '-1',
      'posZ': '-2',

    },
    {
      'name': 'A12',
      'type': 'Scan',
      'text': 'Myllokunmingia fengjiaoa',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX-2,
      'posY': '1',
      'posZ': '-5',

    },
    {
      'name': 'A13',
      'type': 'Scan',
      'text': 'Namacalathus hermanastes',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX +3,
      'posY': '-2',
      'posZ': '-3',

    },
    {
      'name': 'A14',
      'type': 'Scan',
      'text': 'Onychodictyon ferox',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX+1,
      'posY': '0',
      'posZ': '-2',

    },
    {
      'name': 'A15',
      'type': 'Scan',
      'text': 'Saetaspongia densa',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX,
      'posY': '-1',
      'posZ': '-6',

    },
    {
      'name': 'A16',
      'type': 'Scan',
      'text': 'Swartpuntia germsi',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX -2,
      'posY': '0',
      'posZ': '-4',

    },
    {
      'name': 'A18',
      'type': 'Scan',
      'text': 'Wiwaxia papilio',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX-1,
      'posY': '-1',
      'posZ': '-3',

    },
    {
      'name': 'A19',
      'type': 'Scan',
      'text': 'Xianguangia sinica',
      'rotating': false,
      'scale': '1.0',
      'posX': modeTwoOffsetX-2,
      'posY': '-1.3',
      'posZ': '-4',

    },
// mode2: orbit animal
    {
      'name': 'A01',
      'type': 'Scan',
      'text': 'Amplectobelua symbrachiata',
      'rotating': false,
      'scale': '1.0',
      'posX': modeOneOffsetX,
      'posY': '0',
      'posZ': '2',

    },
//mode 0: zoom
// rechts
    {
      'name': 'Z02_01',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '2.5',
      'posY': '0',
      'posZ': '6.5',

    },
    {
      'name': 'Z02_02',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '4',
      'posY': '0',
      'posZ': '4',

    },
    {
      'name': 'Z02_03',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '5',
      'posY': '0',
      'posZ': '2',

    },
    {
      'name': 'Z02_04',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '7',
      'posY': '0',
      'posZ': '0',

    },
    {
      'name': 'Z02_05',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '8.5',
      'posY': '0',
      'posZ': '-2',

    },
  //oben
    {
      'name': 'Z03_01',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '2',
      'posZ': '6.5',

    },
    {
      'name': 'Z03_02',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '4',
      'posZ': '4',

    },
    {
      'name': 'Z03_04',
      'type': 'Video',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '5.5',
      'posZ': '2',

    },
    {
      'name': 'Z03_05',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '7',
      'posZ': '0',

    },
    {
      'name': 'Z03_06',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '8.5',
      'posZ': '-2',

    },
    {
      'name': 'Z03_03',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '11',
      'posZ': '-4',

    },
    // links
    {
      'name': 'Z04_01',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '-2.5',
      'posY': '0',
      'posZ': '6.5',

    },
    {
      'name': 'Z04_02',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '-4',
      'posY': '0',
      'posZ': '4',

    },
    {
      'name': 'Z04_03',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '-6',
      'posY': '0',
      'posZ': '2',

    },
    {
      'name': 'Z04_04',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '-8',
      'posY': '0',
      'posZ': '0',

    },
    {
      'name': 'Z04_05',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '-10',
      'posY': '0',
      'posZ': '-2',

    },
    {
      'name': 'Z04_06',
      'type': 'Video',
      'rotating': false,
      'scale': '0.5',
      'posX': '-12',
      'posY': '0',
      'posZ': '-4',

    },
    // unten
    {
      'name': 'Z01_01',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '-2',
      'posZ': '6.5',

    },    {
      'name': 'Z01_02',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '-3.5',
      'posZ': '4',

    },    {
      'name': 'Z01_03',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0.5',
      'posY': '-5.5',
      'posZ': '2',

    },    {
      'name': 'Z01_04',
      'type': 'Plane',
      'rotating': false,
      'scale': '0.5',
      'posX': '0',
      'posY': '-6.5',
      'posZ': '0',

    },
  ]



// video loader
    function loadVideo(object){
      if(object.type != 'Video')return
    else{
      const video = document.createElement('video');
      video.src = 'papVideos/' +object.name+'_Video.mp4';
      video.loop = true;
      video.muted = true;
      video.play();

      const textureV = new THREE.VideoTexture(video);
      const vGeo = new THREE.BoxGeometry(3,1.6875,0.01)
      const vMat = new THREE.MeshBasicMaterial( {map: textureV, transparent:true, opacity: 1})
      const vMesh = new THREE.Mesh(vGeo, vMat)
      vMesh.position.set(object.posX,object.posY,object.posZ)
      vMesh.name = object.name
      scene.add(vMesh)
    }
    }

//Scan + text loader
    let model
    const gltfLoader = new GLTFLoader()

    function renderTextToObj(name, text) {
      var fontLoader = new FontLoader();
      var font;

      fontLoader.load('courierPrime.json', function (loadedFont) {
        font = loadedFont;
        parent = scene.getObjectByName(name)
        var textMD = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity:0 });
        var textD = new TextGeometry(text, { font: font, size: 0.04, height: 0.01, curveSegments: 12 });
        var textMeshD = new THREE.Mesh(textD, textMD);
        textMeshD.position.copy(parent.position)
        textMeshD.position.y = (parent.position.y) -0.1
        textMeshD.name = name + '.text'
        scene.add(textMeshD)
      })

    }
    let mixer = null
    function renderObject3D(object, x, y, z, scale) {
      gltfLoader.load(
        '3D_animals_Test1/' + object + '.glb',
        (gltf) => {
          model = gltf.scene
          model.name = object
          scene.add(model)
          model.scale.set(0.13*scale, 0.13*scale, .13*scale)
          model.position.set(x, y, z)
          
          if(gltf.animations && gltf.animations.length > 0){
            mixer = new THREE.AnimationMixer(gltf.scene)
            console.log(typeof gltf.animations[0])
            const action = mixer.clipAction(gltf.animations[0])
            action.play()
          } else console.log("no animations found", object)
        },
        (error) => {
          console.log(error)
        }
      )

    }


// load elements
    objectIndex.forEach((y) => (y.type == 'Scan' || y.type == 'Plane') ? renderObject3D(y.name, y.posX, y.posY, y.posZ, y.scale):void(0))
    objectIndex.forEach((y) => loadVideo(y))




    function onMouseMove(event) {
      // Calculate mouse position in normalized device coordinates
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    
      if (controlMode == 0) {
        updateCameraMode0(mouseX, mouseY);
      }
      if (controlMode == 1) {
        updateCameraMode1(mouseX, mouseY);
      }
      if (controlMode == 2) {
        updateCameraMode2(mouseX, mouseY);
      }


  
    }

    window.addEventListener('mousemove', onMouseMove, false);

    const modeButton = document.getElementById('modeButton');
    modeButton.addEventListener('click', () => {
      controlMode = (controlMode + 1) % 3; // Toggle between 0 and 1
      modeButton.textContent = `scene ${controlMode}`;
  
      if (controlMode == 0) {
        // var image = document.getElementById("icon")
        // image.src= "./icons/orbit.png"

        camera.position.copy(modeZeroPostition);
        camera.rotation.copy(modeZeroRotation);
      }
      if (controlMode == 1) {
        camera.position.copy(modeOnePostition);
        camera.position.x -= modeOneOffsetX;
        camera.rotation.copy(modeZeroRotation);
      }
      if (controlMode == 2) {
        camera.position.copy(modeTwoPostition);
        camera.position.x += modeTwoOffsetX;
        camera.rotation.copy(modeZeroRotation);
      }
      console.log("trigger pulled")

    });




// Data income + mode control
    // socket.io
    // socket.on('oscMessage', (oscData) => {
    //   // console.log('Received OSC data from server:', oscData);
    //   const normalizedU = normalize(oscData.u, 0, 1, -1, 1);
    //   const normalizedV = normalize(oscData.v, 0, 1, -1, 1);
      
    //   const normalizedRy = mapToRadians(oscData.ry);
    //   const normalizedRx = mapToRadians(oscData.rx);

    //   const trigger = oscData.t == 1.0;



//normalize income data
//x and y normalize
    function normalize(value, minInput, maxInput, minOutput, maxOutput) {
      return ((value - minInput) / (maxInput - minInput)) * (maxOutput - minOutput) + minOutput;
    }

//radiants
    function mapToRadians(input) {
      var totalRange = 85.05 - (-263.9);
      var offset = 263.9;
      var mappedValue = (input + offset) / totalRange * 360;
      mappedValue %= 360;
      var mappedRadians = mappedValue * (Math.PI / 180);
      return mappedRadians;
  }



//control modes
// mode 0
    function updateCameraMode0(u, v) {
      camera.position.x = 9 * u ;
      camera.position.y = 8.3 * v ;
      const distance = Math.sqrt(u ** 2 + v ** 2);
      const zoomFactor = 10;
      const targetZoom = originalZoom - distance * zoomFactor;
      camera.position.z += (targetZoom - camera.position.z) * 0.1;
      camera.position.z = Math.min(camera.position.z, originalZoom);
    }

// mode 1
    const modeTwoZoom = 4;
    function updateCameraMode1(mouseX, mouseY) {

      var targetRotationY = mouseX * 1.7*(Math.PI/4);
      var targetRotationX = mouseY * (Math.PI/4);
      var target = scene.getObjectByName("A01").position;

      //camera.rotation.setFromQuaternion(new THREE.Quaternion().setFromEuler(new THREE.Euler(targetRotationX, targetRotationY, 0, 'XYZ')));

      camera.position.x = modeTwoZoom * Math.sin(targetRotationY) + parseInt(target.x) ;
      camera.position.y = modeTwoZoom * parseInt(target.y);
      camera.position.z = modeTwoZoom * Math.cos(targetRotationY) + parseInt(target.z);

      camera.lookAt(target);
    }


// mode 2
    function updateCameraMode2(u, v, ry, rx) {
      camera.position.x = u + modeTwoOffsetX;
      camera.position.z = 2*(-v) - modeTwoOffsetZ ;
      //camera.rotation.y = ry;
      //camera.rotation.x = rx;
    }


//light
    const color = 0xFFFFFF;
    const intensity = 2;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);

    const lightp = new THREE.PointLight(0xFFFFFF, 10, 100);
    lightp.position.set(50, 50, 50);
    scene.add(lightp);

    const lightp2 = new THREE.PointLight(0xFFFFFF, 10, 100);
    lightp2.position.set(-50, -50, 50);
    scene.add(lightp2);




//animate
    const clock = new THREE.Clock()
    function animate() {

      requestAnimationFrame(animate);
      //controls.update()
      if(mixer)
      {
          mixer.update(clock.getDelta())
      }

      renderer.render(scene, camera);

      if (renderer.info.render.frame == 100){
        objectIndex.forEach((y) => y.type == 'Scan' ? renderTextToObj(y.name, y.text) :void(0))
      }
      if(renderer.info.render.frame > 300) {
        objectIndex.forEach((object) => {
          var object3D = scene.getObjectByName(object.name)
    //      if (typeof object3D != "undefined") {
            var text3D = scene.getObjectByName(object.name+'.text')
            var distance = Math.abs(camera.position.z - object3D.position.z);

              if(distance < 3 && object.rotating)
                object3D.rotation.z += 0.02

              if(distance < 3 && object.type == 'Scan')
                text3D.material.opacity = 3/distance -1

              if(distance < 3 && object.type == 'Plane'){
                object3D.traverse(n => { if ( n.isMesh ) {
                 n.material.transparent = true
                 var distance_factor = ((3-distance)/3)
                 n.material.opacity = 1-(distance_factor*Math.exp(distance_factor))
                }});
              }

              if(distance < 3 && object.type == 'Video'){
                 var distance_factor = ((3-distance)/3)
                 object3D.material.opacity = 1-(distance_factor*Math.exp(distance_factor))
              }

              if(distance < 4.6 && distance > 3.9 && object.type == 'Plane'){
                object3D.traverse(n => { if ( n.isMesh ) {
                  n.material.transparent = true
                  n.material.opacity = 4.6-distance
                }});
              }
              if(distance > 4.6 && object.type == 'Plane'){
                object3D.traverse(n => { if ( n.isMesh ) {
                n.material.transparent = true
                n.material.opacity = 0
                }});
              }

              if(distance < 5 && distance > 3.9 && object.type == 'Video')
                object3D.material.opacity = 5-distance
              if(distance > 5 && object.type == 'Video')
                object3D.material.opacity = 0
      })
      }
    }

    animate();

//eventListener
    window.addEventListener('resize', function () {
      var newWidth = window.innerWidth;
      var newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });
