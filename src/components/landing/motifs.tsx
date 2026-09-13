export function MotifLayer() {
  return (
    <div className="motif-layer" aria-hidden="true">
      <svg className="motif motif-dragon" viewBox="0 0 640 280" fill="none">
        <path
          className="motif-stroke"
          d="M48 168c28-38 62-62 104-58 22 2 38 16 36 34-2 18-22 26-38 18-10-4-16-16-8-26 14-16 48-8 62 10 18 24 18 62-6 84-28 26-78 18-96-18-8-16-6-36 8-48 22-18 56-8 70 14 22 36 8 86-32 104-48 22-102-8-114-58-6-24 4-50 26-64 36-24 86-8 108 28 14 22 12 52-8 70-28 26-74 20-94-12-8-14-6-34 8-44 22-16 52-4 62 20 8 18 0 40-18 50-28 16-62 2-70-28-4-16 4-34 20-40 18-8 38 2 44 20 4 12-2 26-14 30"
        />
        <path
          className="motif-stroke"
          d="M214 96c36-48 92-74 148-62 44 10 78 42 86 84 6 34-10 68-40 84-42 22-92 4-114-36-10-18-8-42 8-56 22-20 56-12 70 12 12 20 6 48-14 60-24 16-56 4-66-22-6-14 0-32 14-38 16-8 34 2 40 18"
        />
        <path
          className="motif-stroke"
          d="M430 70c38-28 86-28 122-4 22 16 36 42 32 68-6 36-40 60-76 58-28-2-52-20-58-46-4-18 4-38 22-46 20-8 42 2 50 20 6 14-2 32-16 38-16 8-36-2-40-18"
        />
        <path
          className="motif-stroke thin"
          d="M86 92c18-22 46-22 58-4M140 64c24-18 50-12 58 8M502 48c22-16 48-10 62 8M560 86c16-20 44-18 58 2M48 210c32 18 70 14 92-8M580 150c18 24 8 52-12 64"
        />
        <circle cx="96" cy="132" r="3.5" className="motif-fill" />
      </svg>

      <svg className="motif motif-drum" viewBox="0 0 200 200">
        <g fill="none" className="motif-stroke" strokeWidth="1.2">
          <circle cx="100" cy="100" r="94" />
          <circle cx="100" cy="100" r="82" />
          <circle cx="100" cy="100" r="64" />
          <circle cx="100" cy="100" r="48" />
          <circle cx="100" cy="100" r="18" />
          <line x1="100" y1="78" x2="100" y2="54" />
          <line x1="117" y1="82" x2="129" y2="61" />
          <line x1="129" y1="93" x2="146" y2="79" />
          <line x1="132" y1="108" x2="154" y2="112" />
          <line x1="125" y1="122" x2="140" y2="139" />
          <line x1="110" y1="130" x2="116" y2="152" />
          <line x1="93" y1="130" x2="84" y2="152" />
          <line x1="78" y1="122" x2="60" y2="139" />
          <line x1="68" y1="108" x2="46" y2="112" />
          <line x1="71" y1="93" x2="54" y2="79" />
          <line x1="83" y1="82" x2="71" y2="61" />
          <line x1="100" y1="78" x2="100" y2="54" />
          <ellipse cx="172" cy="100" rx="7" ry="3.5" />
          <ellipse cx="151" cy="151" rx="7" ry="3.5" />
          <ellipse cx="100" cy="172" rx="7" ry="3.5" />
          <ellipse cx="49" cy="151" rx="7" ry="3.5" />
          <ellipse cx="28" cy="100" rx="7" ry="3.5" />
          <ellipse cx="49" cy="49" rx="7" ry="3.5" />
          <ellipse cx="100" cy="28" rx="7" ry="3.5" />
          <ellipse cx="151" cy="49" rx="7" ry="3.5" />
        </g>
      </svg>

      <svg className="motif motif-temple" viewBox="0 0 260 180" fill="none">
        <path
          className="motif-stroke"
          d="M28 148h204M40 148V118h180v30M52 118V96h156v22M68 96V76h124v20"
        />
        <path className="motif-stroke" d="M22 118c18-6 36-22 48-22h120c12 0 30 16 48 22" />
        <path className="motif-stroke" d="M34 96c16-6 32-20 42-20h108c10 0 26 14 42 20" />
        <path className="motif-stroke" d="M50 76c14-6 28-18 36-18h88c8 0 22 12 36 18" />
        <path className="motif-stroke" d="M112 76l18-28 18 28" />
        <path
          className="motif-stroke thin"
          d="M78 148c8-22 18-34 28-38 10 4 20 16 28 38M126 148c8-22 18-34 28-38 10 4 20 16 28 38"
        />
        <path
          className="motif-stroke thin"
          d="M20 42c18-16 38-16 52 0 12-18 36-22 52-2 14-16 38-14 52 4"
        />
      </svg>
    </div>
  );
}
