"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let displayWidth = canvas.parentElement?.clientWidth || 380;
    let displayHeight = canvas.parentElement?.clientHeight || 380;

    const updateCanvasSize = () => {
      if (!canvas || !canvas.parentElement) return;
      displayWidth = canvas.parentElement.clientWidth;
      displayHeight = canvas.parentElement.clientHeight;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Generate 620 points on sphere using Fibonacci spiral (Golden Ratio)
    const numPoints = 620;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle ~ 2.39996 rad
    const rawPoints: { x: number; y: number; z: number; isBeacon: boolean }[] = [];

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // from 1 (north pole) to -1 (south pole)
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Select ~14 nodes to be pulsing tech landmark beacons
      const isBeacon = i % 44 === 7;

      rawPoints.push({ x, y, z, isBeacon });
    }

    // Interactive mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.8;
      mouseY = y * 0.8;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    };

    const currentParent = canvas.parentElement;
    if (currentParent) {
      currentParent.addEventListener("mousemove", handleMouseMove);
      currentParent.addEventListener("mouseleave", handleMouseLeave);
    }

    let rotY = 0;
    let rotX = 0.22;
    let targetRotX = 0.22;
    let pulseTime = 0;

    // Light source vector (upper-left, slightly toward camera)
    const lx = -0.38;
    const ly = -0.45;
    const lz = 0.81;

    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const centerX = displayWidth / 2;
      const centerY = displayHeight / 2;
      const radius = Math.min(displayWidth, displayHeight) * 0.385;
      const fov = 460;

      pulseTime += 0.035;

      // Continuous smooth auto-rotation with gentle mouse influence
      rotY += isHovering ? 0.005 : 0.007;
      targetRotX = 0.2 + (mouseY ? mouseY * 0.5 : Math.sin(rotY * 0.5) * 0.08);
      rotX += (targetRotX - rotX) * 0.05;

      const cosY = Math.cos(rotY + (mouseX ? mouseX * 0.4 : 0));
      const sinY = Math.sin(rotY + (mouseX ? mouseX * 0.4 : 0));
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 1. Volumetric inner atmosphere & core glow
      const coreGradient = ctx.createRadialGradient(
        centerX - radius * 0.2,
        centerY - radius * 0.2,
        0,
        centerX,
        centerY,
        radius * 1.05
      );
      coreGradient.addColorStop(0, "rgba(0, 74, 173, 0.22)");
      coreGradient.addColorStop(0.35, "rgba(79, 70, 229, 0.14)");
      coreGradient.addColorStop(0.75, "rgba(0, 74, 173, 0.04)");
      coreGradient.addColorStop(1, "rgba(0, 74, 173, 0)");

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Soft outer planetary corona glow
      const coronaGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.9,
        centerX,
        centerY,
        radius * 1.25
      );
      coronaGradient.addColorStop(0, "rgba(99, 102, 241, 0.08)");
      coronaGradient.addColorStop(0.5, "rgba(0, 74, 173, 0.03)");
      coronaGradient.addColorStop(1, "rgba(0, 74, 173, 0)");

      ctx.fillStyle = coronaGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // 2. Latitude wireframe rings (Holographic equator & tropics)
      const drawLatitudeRing = (latY: number, lineDash: number[], alpha: number) => {
        const ringRad = Math.sqrt(Math.max(0, 1 - latY * latY)) * radius;
        const ringYCenter = latY * radius;

        ctx.save();
        ctx.translate(centerX, centerY);
        // Tilt ring along rotation
        const ringYRot = ringYCenter * cosX;
        const ringScaleY = Math.abs(sinX) * 0.95 + 0.08;

        ctx.translate(0, ringYRot);
        ctx.scale(1, ringScaleY);

        ctx.beginPath();
        ctx.arc(0, 0, ringRad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 74, 173, ${alpha})`;
        ctx.lineWidth = 0.85;
        ctx.setLineDash(lineDash);
        ctx.stroke();
        ctx.restore();
      };

      drawLatitudeRing(0, [5, 7], 0.25); // Equator
      drawLatitudeRing(0.48, [3, 6], 0.14); // Northern tropic
      drawLatitudeRing(-0.48, [3, 6], 0.14); // Southern tropic

      // 3. Project 3D points
      const projected = rawPoints.map((pt) => {
        // Point scaled to radius
        const px = pt.x * radius;
        const py = pt.y * radius;
        const pz = pt.z * radius;

        // Rotate around Y
        const x1 = px * cosY - pz * sinY;
        const z1 = px * sinY + pz * cosY;

        // Rotate around X
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;

        // Perspective projection
        const scale = fov / (fov + z2 + radius);
        const x2D = centerX + x1 * scale;
        const y2D = centerY + y2 * scale;
        const depth = (z2 + radius) / (2 * radius); // 0 (back) to 1 (front)

        // Normal vector for 3D specular lighting
        const nx = x1 / radius;
        const ny = y2 / radius;
        const nz = z2 / radius;
        const diffuse = Math.max(0, nx * lx + ny * ly + nz * lz);

        return {
          x: x2D,
          y: y2D,
          z: z2,
          depth,
          scale,
          diffuse,
          isBeacon: pt.isBeacon,
        };
      });

      // Sort points from back to front for proper occlusion
      projected.sort((a, b) => a.z - b.z);

      // 4. Constellation mesh lines (between nearby front-facing nodes)
      ctx.lineWidth = 0.7;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.z < -radius * 0.15) continue; // Skip points on backside

        for (let j = i + 1; j < Math.min(i + 15, projected.length); j++) {
          const p2 = projected[j];
          if (p2.z < -radius * 0.15) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 950) {
            const lineAlpha = (1 - distSq / 950) * Math.min(p1.depth, p2.depth) * 0.38;
            ctx.strokeStyle = `rgba(0, 74, 173, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 5. Draw 3D luminous particles
      for (let i = 0; i < projected.length; i++) {
        const pt = projected[i];
        const isFront = pt.z > 0;

        if (isFront) {
          // Front particles: Rich #004AAD glow with bright specular intensity
          const pointSize = Math.max(1.3, (1.6 + pt.diffuse * 1.6) * pt.scale);
          const alpha = Math.min(1, 0.45 + pt.depth * 0.55);

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pointSize, 0, Math.PI * 2);

          // Specular highlight: points facing light become bright electric indigo
          if (pt.diffuse > 0.45) {
            ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.shadowColor = "rgba(79, 70, 229, 0.9)";
            ctx.shadowBlur = 7;
          } else {
            ctx.fillStyle = `rgba(0, 74, 173, ${alpha})`;
            ctx.shadowColor = "rgba(0, 74, 173, 0.75)";
            ctx.shadowBlur = 4;
          }
          ctx.fill();

          // Pulsing landmark beacon rings
          if (pt.isBeacon && pt.depth > 0.6) {
            ctx.shadowBlur = 0;
            const beaconPulse = (Math.sin(pulseTime + pt.x * 0.05) + 1) / 2;
            const beaconRadius = pointSize + 2 + beaconPulse * 4;

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, beaconRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 74, 173, ${0.45 - beaconPulse * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else {
          // Back particles: Soft, smaller, depth-attenuated slate dots
          ctx.shadowBlur = 0;
          const pointSize = Math.max(0.7, 1.1 * pt.scale);
          const alpha = Math.max(0.1, pt.depth * 0.3);

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pointSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (currentParent) {
        currentParent.removeEventListener("mousemove", handleMouseMove);
        currentParent.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
