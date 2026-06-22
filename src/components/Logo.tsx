type LogoProps = {
  variant?: "light" | "dark"; // light = on navy bg, dark = on light bg
  withTagline?: boolean;
  className?: string;
};

export default function Logo({ variant = "light", withTagline = false, className = "" }: LogoProps) {
  const primary = variant === "light" ? "text-white" : "text-navy";
  const secondary = variant === "light" ? "text-gold" : "text-navy";
  const tagline = variant === "light" ? "text-muted-blue" : "text-gray-body";

  return (
    <div className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-bold tracking-[0.02em] text-xl md:text-2xl ${primary}`}>
        BLACKHILL
      </span>
      <span className={`font-medium tracking-[0.3em] text-[10px] md:text-xs mt-1 ${secondary}`}>
        CAPITAL
      </span>
      {withTagline && (
        <span className={`italic text-xs mt-2 ${tagline}`}>
          Onde capital encontra complexidade.
        </span>
      )}
    </div>
  );
}
