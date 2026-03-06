import * as THREE from "three";

export type ModelDef = { label: string; build: (scene: THREE.Scene) => THREE.Group };

// ─── 1. NODE NETWORK ─────────────────────────────────────────────────────────
// Connected spheres representing API/network topology
function buildNetwork(): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.45 });
  const lineMat = new THREE.LineBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.5 });
  const accentMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: true, transparent: true, opacity: 0.8 });

  const nodePositions: THREE.Vector3[] = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1.4, 0.8, 0.2),
    new THREE.Vector3(-1.2, 0.9, -0.3),
    new THREE.Vector3(1.0, -1.0, 0.5),
    new THREE.Vector3(-1.3, -0.7, 0.1),
    new THREE.Vector3(0.2, 1.6, -0.2),
    new THREE.Vector3(-0.4, -1.5, -0.4),
  ];

  const sizes = [0.22, 0.14, 0.14, 0.12, 0.12, 0.1, 0.1];

  nodePositions.forEach((pos, i) => {
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(sizes[i], 10, 8), i === 0 ? accentMat : mat);
    sphere.position.copy(pos);
    group.add(sphere);
  });

  const edges = [[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6],[1,3],[2,4]];
  edges.forEach(([a, b]) => {
    const points = [nodePositions[a].clone(), nodePositions[b].clone()];
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMat));
  });

  group.rotation.x = 0.3;
  return group;
}

// ─── 2. DATA HELIX ───────────────────────────────────────────────────────────
// Double helix like a streaming data pipeline
function buildDataHelix(): THREE.Group {
  const group = new THREE.Group();
  const strandMat = new THREE.LineBasicMaterial({ color: 0xf0ede8, transparent: true, opacity: 0.7 });
  const bridgeMat = new THREE.LineBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.5 });
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: false, transparent: true, opacity: 0.6 });

  const turns = 2.5, steps = 60;
  const pts1: THREE.Vector3[] = [], pts2: THREE.Vector3[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps, a = t * turns * Math.PI * 2;
    const y = t * 3.6 - 1.8;
    pts1.push(new THREE.Vector3(Math.cos(a) * 0.8, y, Math.sin(a) * 0.8));
    pts2.push(new THREE.Vector3(Math.cos(a + Math.PI) * 0.8, y, Math.sin(a + Math.PI) * 0.8));
  }

  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts1), strandMat));
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts2), strandMat));

  for (let i = 0; i <= steps; i += 5) {
    const bridgePts = [pts1[i].clone(), pts2[i].clone()];
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bridgePts), bridgeMat));
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), nodeMat);
    node.position.copy(pts1[i]);
    group.add(node);
    const node2 = node.clone();
    node2.position.copy(pts2[i]);
    group.add(node2);
  }

  return group;
}

// ─── 3. ORBITAL SYSTEM ───────────────────────────────────────────────────────
// Digital ecosystem: central core with orbiting layers
function buildOrbital(): THREE.Group {
  const group = new THREE.Group();
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: true, transparent: true, opacity: 0.9 });
  const orbitMat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.3 });
  const ringMat = new THREE.LineBasicMaterial({ color: 0xf0ede8, transparent: true, opacity: 0.35 });
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.8 });

  // Core
  group.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 1), coreMat));

  // Orbiting rings at different angles
  const orbits = [
    { r: 1.0, tilt: 0.3, dots: 3 },
    { r: 1.5, tilt: 1.1, dots: 4 },
    { r: 2.0, tilt: 0.7, dots: 5 },
  ];

  orbits.forEach(({ r, tilt, dots }) => {
    // Ring line
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.25, Math.sin(a) * r));
    }
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), ringMat);
    line.rotation.x = tilt;
    group.add(line);

    // Dots on orbit
    for (let i = 0; i < dots; i++) {
      const a = (i / dots) * Math.PI * 2;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), dotMat);
      dot.position.set(
        Math.cos(a) * r,
        Math.sin(a) * r * 0.25 * Math.cos(tilt) - Math.sin(a) * r * Math.sin(tilt),
        Math.sin(a) * r * Math.cos(tilt)
      );
      group.add(dot);
    }
  });

  // Outer sphere lattice
  group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), orbitMat));

  return group;
}

// ─── 4. NESTED CUBES ─────────────────────────────────────────────────────────
// Layered box structure — cloud / architecture diagram feel
function buildNestedCubes(): THREE.Group {
  const group = new THREE.Group();
  const sizes = [2.4, 1.6, 0.9];
  const opacities = [0.2, 0.35, 0.55];

  sizes.forEach((s, i) => {
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(s, s, s));
    const mat = new THREE.LineBasicMaterial({ color: i === 2 ? 0xe8d5a3 : 0xf0ede8, transparent: true, opacity: opacities[i] });
    const mesh = new THREE.LineSegments(edges, mat);
    mesh.rotation.set(0.4 * i, 0.3 * i, 0.2 * i);
    group.add(mesh);
  });

  // Diagonal accent lines through center
  const accentMat = new THREE.LineBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.4 });
  [
    [new THREE.Vector3(-1.2, -1.2, -1.2), new THREE.Vector3(1.2, 1.2, 1.2)],
    [new THREE.Vector3(1.2, -1.2, -1.2), new THREE.Vector3(-1.2, 1.2, 1.2)],
  ].forEach((pts) => {
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), accentMat));
  });

  group.rotation.x = 0.4;
  group.rotation.y = 0.4;
  return group;
}

// ─── 5. SIGNAL WAVE ──────────────────────────────────────────────────────────
// Concentric expanding rings — broadcast / digital signal
function buildSignalWave(): THREE.Group {
  const group = new THREE.Group();

  // Center core
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: true, transparent: true, opacity: 0.9 });
  group.add(new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), coreMat));

  // Wave rings — horizontal
  for (let i = 1; i <= 6; i++) {
    const r = i * 0.32;
    const opacity = 0.6 - i * 0.08;
    const pts: THREE.Vector3[] = [];
    for (let j = 0; j <= 64; j++) {
      const a = (j / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
    }
    const mat = new THREE.LineBasicMaterial({ color: 0xf0ede8, transparent: true, opacity: Math.max(opacity, 0.08) });
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
  }

  // Vertical arc rings
  for (let i = 0; i < 3; i++) {
    const arc = i * Math.PI / 3;
    const r = 0.9 + i * 0.35;
    const pts: THREE.Vector3[] = [];
    for (let j = -32; j <= 32; j++) {
      const a = (j / 32) * Math.PI * 0.7;
      pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0));
    }
    const mat = new THREE.LineBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.4 - i * 0.1 });
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
    line.rotation.y = arc;
    group.add(line);
  }

  group.rotation.x = 0.4;
  return group;
}

// ─── 6. FLOW GRID ────────────────────────────────────────────────────────────
// Perspective grid plane — data landscape / dashboard
function buildFlowGrid(): THREE.Group {
  const group = new THREE.Group();
  const cols = 10, rows = 8, spacingX = 0.4, spacingZ = 0.4;
  const offsetX = (cols - 1) * spacingX / 2, offsetZ = (rows - 1) * spacingZ / 2;
  const mat = new THREE.LineBasicMaterial({ color: 0xf0ede8, transparent: true, opacity: 0.25 });
  const accentMat = new THREE.LineBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.6 });

  // Horizontal lines
  for (let z = 0; z < rows; z++) {
    const pts: THREE.Vector3[] = [];
    for (let x = 0; x < cols; x++) {
      const wave = Math.sin(x * 0.7) * Math.sin(z * 0.5) * 0.4;
      pts.push(new THREE.Vector3(x * spacingX - offsetX, wave, z * spacingZ - offsetZ));
    }
    const isAccent = z === Math.floor(rows / 2);
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), isAccent ? accentMat : mat));
  }
  // Vertical lines
  for (let x = 0; x < cols; x++) {
    const pts: THREE.Vector3[] = [];
    for (let z = 0; z < rows; z++) {
      const wave = Math.sin(x * 0.7) * Math.sin(z * 0.5) * 0.4;
      pts.push(new THREE.Vector3(x * spacingX - offsetX, wave, z * spacingZ - offsetZ));
    }
    const isAccent = x === Math.floor(cols / 2);
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), isAccent ? accentMat : mat));
  }

  group.rotation.x = -0.55;
  group.position.y = -0.2;
  return group;
}

export const DIGITAL_MODEL_DEFS: ModelDef[] = [
  { label: "Ağ Topolojisi", build: buildNetwork },
  { label: "Veri Akışı", build: buildDataHelix },
  { label: "Dijital Ekosistem", build: buildOrbital },
  { label: "Mimari Katmanlar", build: buildNestedCubes },
  { label: "Sinyal & Yayın", build: buildSignalWave },
  { label: "Veri Peyzajı", build: buildFlowGrid },
];

function buildGear(): THREE.Group {
  const group = new THREE.Group();
  const teeth = 18, outerR = 1.8, innerR = 1.3, toothH = 0.35, thick = 0.4;
  const shape = new THREE.Shape();
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.4) / teeth) * Math.PI * 2;
    const a2 = ((i + 0.6) / teeth) * Math.PI * 2;
    const a3 = ((i + 1) / teeth) * Math.PI * 2;
    const fn = (r: number, a: number): [number, number] => [r * Math.cos(a), r * Math.sin(a)];
    if (i === 0) shape.moveTo(...fn(innerR, a0));
    else shape.lineTo(...fn(innerR, a0));
    shape.lineTo(...fn(outerR + toothH, a1));
    shape.lineTo(...fn(outerR + toothH, a2));
    shape.lineTo(...fn(innerR, a3));
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, 0.5, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: false });
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.5 });
  group.add(new THREE.Mesh(geo, mat));
  group.rotation.x = 0.3;
  return group;
}

function buildVase(): THREE.Group {
  const group = new THREE.Group();
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24, y = t * 3.6 - 1.8;
    const r = 0.4 + 0.8 * Math.sin(t * Math.PI) * Math.pow(Math.sin(t * Math.PI), 0.4) + 0.1 * Math.sin(t * Math.PI * 5) * 0.3;
    pts.push(new THREE.Vector2(r, y));
  }
  const geo = new THREE.LatheGeometry(pts, 32);
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.45 });
  group.add(new THREE.Mesh(geo, mat));
  return group;
}

function buildAbstract(): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.45 });
  const matA = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: true, transparent: true, opacity: 0.6 });
  group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 1), mat));
  const inner = new THREE.Mesh(new THREE.OctahedronGeometry(0.7, 0), matA);
  inner.rotation.set(0.5, 0.5, 0);
  group.add(inner);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.04, 8, 48), mat);
  ring.rotation.x = Math.PI / 2;
  group.add(ring);
  return group;
}

function buildFlange(): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.45 });
  group.add(new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.4, 24), mat));
  const fd = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.22, 32), mat);
  fd.position.y = 1.2; group.add(fd);
  const fd2 = fd.clone(); fd2.position.y = -1.2; group.add(fd2);
  const accentMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: true, transparent: true, opacity: 0.7 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const circle = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.025, 6, 14), accentMat);
    circle.position.set(Math.cos(a) * 1.1, 1.2, Math.sin(a) * 1.1);
    circle.rotation.x = Math.PI / 2; group.add(circle);
    const c2 = circle.clone(); c2.position.y = -1.2; group.add(c2);
  }
  group.rotation.x = 0.4; group.rotation.z = 0.2;
  return group;
}

function buildSphereLattice(): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.35 });
  group.add(new THREE.Mesh(new THREE.SphereGeometry(1.8, 24, 16), mat));
  for (let i = 0; i < 3; i++) {
    const r = new THREE.Mesh(
      new THREE.TorusGeometry(1.8 * Math.cos((i + 1) * Math.PI / 8), 0.025, 6, 48),
      new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: false, transparent: true, opacity: 0.5 })
    );
    r.rotation.x = (i + 1) * 0.4;
    group.add(r);
  }
  return group;
}

function buildSpring(): THREE.Group {
  const group = new THREE.Group();
  const pts: THREE.Vector3[] = [];
  const turns = 7, perTurn = 32;
  for (let i = 0; i <= turns * perTurn; i++) {
    const t = i / (turns * perTurn), a = t * turns * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * 0.9, t * 3.6 - 1.8, Math.sin(a) * 0.9));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xf0ede8, transparent: true, opacity: 0.7 })));
  const capMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, wireframe: true, transparent: true, opacity: 0.5 });
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.06, 32), capMat);
  top.position.y = 1.8; group.add(top);
  const bot = top.clone(); bot.position.y = -1.8; group.add(bot);
  return group;
}

function buildBowl(): THREE.Group {
  const group = new THREE.Group();
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20, y = t * 1.8 - 0.2;
    const r = 0.3 + 1.5 * Math.pow(t, 0.6) * Math.sin(t * Math.PI * 0.85);
    if (r > 0) pts.push(new THREE.Vector2(r, y));
  }
  const geo = new THREE.LatheGeometry(pts, 36);
  const mat = new THREE.MeshBasicMaterial({ color: 0xf0ede8, wireframe: true, transparent: true, opacity: 0.45 });
  group.add(new THREE.Mesh(geo, mat));
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.5 });
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.9 + i * 0.12, 0.015, 6, 40), ringMat);
    ring.position.y = 0.3 + i * 0.3; ring.rotation.x = Math.PI / 2;
    group.add(ring);
  }
  group.rotation.x = 0.15;
  return group;
}

export const MODEL_DEFS: ModelDef[] = [
  { label: "Dişli", build: buildGear },
  { label: "Vazo", build: buildVase },
  { label: "Geometrik Soyut", build: buildAbstract },
  { label: "Flanş", build: buildFlange },
  { label: "Kafes Küre", build: buildSphereLattice },
  { label: "Helikal Yay", build: buildSpring },
  { label: "Dekor Kase", build: buildBowl },
];
