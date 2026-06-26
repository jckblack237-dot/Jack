interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" className="h-[60px] w-full sm:h-[90px]">
        <path
          d="M0 40C160 80 320 0 480 24C640 48 800 88 960 64C1120 40 1280 8 1440 32V90H0V40Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
