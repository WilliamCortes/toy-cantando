import React from "react";

export function MagicDescription() {
  return (
    <div className="flex justify-center px-4">
      <div className="bg-cyan-300 rounded-full max-w-5xl w-full h-[116px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <h2 className="text-fuchsia-600 text-[18px] font-bold leading-tight mb-1">
          Cuentos infantiles y cuentos clásicos infantiles
        </h2>
        <p className="text-gray-800 text-[13px] leading-snug font-weight-bold">
          Comparte tiempo de calidad con tus hijos leyendo nuestros cuentos mágicos y divertidos llenos de aventuras y aprendizajes.
          <br />
          Una oportunidad para crear momentos inolvidables juntos, mientras viajan en el maravilloso mundo de la imaginación.
        </p>
      </div>
    </div>
  );
}
