import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  image: string;          // ruta en /public (p.ej. "/javilogoblackletter.png")
  duration?: number;      // segundos del revelado
  delay?: number;         // segundos antes de iniciar
  easing?: string;        // CSS easing, p.ej. "ease-in-out"
  className?: string;
  maxWidthPx?: number;    // límite de ancho (px)
  maxWidthVw?: number;    // límite relativo (% viewport)
  borderRadius?: number;  // esquinas suaves del canvas
};

const SignatureRevealWipe: React.FC<Props> = ({
  image,
  duration = 5.2,        // ← más lento por defecto
  delay = 0.3,
  easing = "ease-in-out",
  className,
  maxWidthPx = 760,
  maxWidthVw = 70,
  borderRadius = 12,
}) => {
  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const maskRectRef = useRef<SVGRectElement>(null);

  // Cargar la imagen para conocer dimensiones reales (evita recortes)
  useEffect(() => {
    const img = new Image();
    img.onload = () => setNat({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = image;
  }, [image]);

  const W = nat?.w ?? 680;
  const H = nat?.h ?? 220;

  // Keyframes en runtime para animar scaleX del rectángulo de la máscara
  const styleText = useMemo(
    () => `
      @keyframes srw-reveal {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
    `,
    []
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="auto"
      className={className}
      style={{
        display: "block",
        maxWidth: `min(${maxWidthPx}px, ${maxWidthVw}vw)`,
      }}
      aria-label="Firma animada (reveal)"
    >
      <defs>
        <clipPath id="srw-clip">
          <rect x="0" y="0" rx={borderRadius} ry={borderRadius} width={W} height={H} />
        </clipPath>

        <mask id="srw-mask">
          {/* fondo negro = oculto */}
          <rect x="0" y="0" width={W} height={H} fill="black" />
          {/* rectángulo blanco que crece de izquierda a derecha */}
          <rect
            ref={maskRectRef}
            x="0"
            y="0"
            width={W}
            height={H}
            fill="white"
            style={{
              transformOrigin: "0px 0px",         // origen a la izquierda
              transform: "scaleX(0)",             // empieza oculto
              animation: `srw-reveal ${duration}s ${delay}s ${easing} forwards`,
            }}
          />
        </mask>
      </defs>

      {/* Imagen revelada por la máscara */}
      <image
        href={image}
        x="0"
        y="0"
        width={W}
        height={H}
        preserveAspectRatio="xMidYMid meet"
        clipPath="url(#srw-clip)"
        mask="url(#srw-mask)"
        style={{
          opacity: 0,
          animation: `srw-fade ${Math.max(0.5, duration * 0.25)}s ${delay + 0.1}s ease-out forwards`,
        }}
      />

      {/* sombra sutil del marco (opcional) */}
      <rect
        x="0"
        y="0"
        width={W}
        height={H}
        rx={borderRadius}
        ry={borderRadius}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
      />

      <style>
        {styleText}
      </style>
      <style>
        {`
          @keyframes srw-fade { to { opacity: 1; } }
        `}
      </style>
    </svg>
  );
};

export default SignatureRevealWipe;
