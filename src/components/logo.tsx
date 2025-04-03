import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 120, height = 35 }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        <img
          src="https://ext.same-assets.com/967929407/3158482915.svg+xml"
          alt="Swift CSV Logo"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    </Link>
  );
}
