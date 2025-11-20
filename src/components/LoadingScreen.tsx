import type { CSSProperties } from "react";

interface LoadingScreenProps {
  variant?: "full" | "page";
}

const overlayStyle: Record<NonNullable<LoadingScreenProps["variant"]>, CSSProperties> = {
  full: { background: "hsla(var(--background) / 0.92)" },
  page: { background: "hsla(var(--background) / 0.78)" },
};

const LoadingScreen = ({ variant = "full" }: LoadingScreenProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
    style={overlayStyle[variant]}
  >
    <div className="loading-shell">
      <div className="loader" aria-hidden />
      <p className="loading-label">Loading experience</p>
    </div>
  </div>
);

export default LoadingScreen;
