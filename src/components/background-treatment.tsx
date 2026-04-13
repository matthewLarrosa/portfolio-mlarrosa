'use client';

export function BackgroundTreatment() {
  const isProduction = process.env.NODE_ENV === "production";
  const deathStarUrl = isProduction ? "/portfolio-mlarrosa/death-star.avif" : "/death-star.avif";

  return (
    <div
      className="death-star-surface absolute inset-0 -z-10"
      aria-hidden="true"
      style={{
        '--death-star-bg': `linear-gradient(to bottom, rgba(244, 241, 236, 0.18), rgba(244, 241, 236, 0) 62%), url('${deathStarUrl}')`,
      } as React.CSSProperties}
    />
  );
}

