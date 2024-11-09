import { AfterViewInit, Component, ElementRef, HostListener, viewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-spaceman',
  standalone: true,
  imports: [],
  templateUrl: './spaceman.component.html',
  styleUrl: './spaceman.component.scss',
})
export class SpacemanComponent implements AfterViewInit {
  canvasContainer = viewChild.required<ElementRef>('canvasContainer');
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private spaceman!: THREE.Object3D;
  private scale = new THREE.Vector3(1.5, 1.5, 1.5);
  private position = new THREE.Vector3(0.2, -0.7, 0);
  private rotationX = 0;
  private rotationY = 0;

  ngAfterViewInit(): void {
    this.init();
    this.loadModel();
    this.onWindowResize();
    this.animate();
  }

  private init() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    this.camera.position.z = 6;
    this.camera.position.y = 1;

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
    this.canvasContainer().nativeElement.appendChild(this.renderer.domElement);

    // Lights
    this.addLights();
  }

  private addLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0x000000, 1);
    this.scene.add(hemisphereLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(10, 5, 10);
    this.scene.add(pointLight);
  }

  private loadModel() {
    const gltfLoader = new GLTFLoader();
    const url = '/3d/spaceman.glb';
    gltfLoader.load(
      url,
      gltf => {
        this.spaceman = gltf.scene;

        this.spaceman.scale.set(this.scale.x, this.scale.y, this.scale.z);
        this.spaceman.position.set(this.position.x, this.position.y, this.position.z);

        this.scene.add(this.spaceman);
      },
      undefined,
      error => {
        console.error('Error loading model:', error);
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth < 768) {
      this.scale.set(1, 1, 1);
      this.position.set(0.2, -0.1, 0);
    } else if (window.innerWidth < 1024) {
      this.scale.set(1.33, 1.33, 1.33);
      this.position.set(0.2, -0.3, 0);
    } else if (window.innerWidth < 1280) {
      this.scale.set(1.5, 1.5, 1.5);
      this.position.set(0.2, -0.4, 0);
    } else if (window.innerWidth < 1536) {
      this.scale.set(1.66, 1.66, 1.66);
      this.position.set(0.2, -0.5, 0);
    } else {
      this.scale.set(2, 2, 2);
      this.position.set(0.2, -0.7, 0);
    }
    if (this.spaceman) {
      this.spaceman.scale.set(this.scale.x, this.scale.y, this.scale.z);
      this.spaceman.position.set(this.position.x, this.position.y, this.position.z);
    }
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this));
    if (this.spaceman) {
      this.spaceman.rotation.y += 0.01; // Add any additional animations if needed
      this.spaceman.rotation.x = this.rotationX;
      // this.spaceman.rotation.y = this.rotationY;
    }
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    this.rotationX = scrollTop * -0.0006;
    this.rotationY = scrollTop * -0.00075;
  }
}
