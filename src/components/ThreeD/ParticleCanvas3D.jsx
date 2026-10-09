import React, { useEffect, useRef } from 'react';

const ParticleCanvas3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates in normalized space (-1 to 1)
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = ((e.clientY - rect.top) / height) * 2 - 1;
      mouse.targetX = x * 0.4;
      mouse.targetY = y * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D particles in a sphere/cloud
    const PARTICLE_COUNT = 75;
    const FOV = 400;
    const particles = [];
    const radius = Math.min(width, height) * 0.42;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Golden spiral distribution on sphere with random depths
      const phi = Math.acos(1 - (2 * (i + 0.5)) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = radius * (0.6 + Math.random() * 0.5);

      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseSize: Math.random() * 2 + 1.5,
        speed: (Math.random() * 0.002 + 0.001) * (i % 2 === 0 ? 1 : -1),
      });
    }

    let angleY = 0;
    let angleX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      angleY += 0.003 + mouse.x * 0.01;
      angleX = mouse.y * 0.5;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = [];

      // 3D rotation and projection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Depth perspective projection
        const depth = FOV + z2;
        if (depth > 20) {
          const scale = FOV / depth;
          const px = width / 2 + x1 * scale;
          const py = height / 2 + y2 * scale;
          const alpha = Math.min(Math.max((z2 + radius) / (radius * 2), 0.15), 0.95);

          projected.push({
            x: px,
            y: py,
            z: z2,
            scale,
            alpha,
            size: p.baseSize * scale,
          });
        }
      }

      // Draw connecting lines between close points in 3D
      const maxDistance = 110;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * ((p1.alpha + p2.alpha) / 2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw 3D glowing particle nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha})`;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 10 * p.scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default ParticleCanvas3D;
