import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const isMobile = width < 640;
    const fontSize = isMobile ? 14 : 18;
    const columnWidth = fontSize;
    let columns = Math.floor(width / columnWidth);

    const chars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const drops = Array.from({ length: columns }).map(
      () => Math.random() * -20
    );

    const draw = () => {
      if (!ctx) return;

      ctx.fillStyle = "rgba(13, 13, 13, 0.15)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < columns; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * columnWidth;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(0, 255, 65, 0.45)";
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 1;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const isMobileNow = width < 640;
      const newFontSize = isMobileNow ? 14 : 18;
      const newColumnWidth = newFontSize;
      columns = Math.floor(width / newColumnWidth);

      drops.length = 0;
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -20;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default MatrixBackground;

