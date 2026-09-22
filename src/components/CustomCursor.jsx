import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable custom reticle on devices with fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over an interactive element
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], label, .glass-card, video, iframe')
      );
      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isDesktop, isVisible]);

  // Smooth lerp trailing position for the outer reticle ring
  useEffect(() => {
    if (!isDesktop) return;

    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.2),
        y: lerp(prev.y, position.y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer VR Reticle Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-transform duration-150 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 border-cyan-400/80 bg-indigo-500/10 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-125'
            : isClicked
            ? 'w-8 h-8 border-purple-400 bg-purple-500/20 scale-90'
            : 'w-9 h-9 border-indigo-500/50 bg-indigo-500/5 shadow-[0_0_10px_rgba(99,102,241,0.2)] scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : isClicked ? 16 : 18)}px, ${
            trailingPos.y - (isHovered ? 24 : isClicked ? 16 : 18)
          }px, 0)`,
        }}
      >
        {/* Decorative VR Reticle corner marks when hovered */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-300 animate-spin-slow opacity-80" />
        )}
      </div>

      {/* Inner Precision VR Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-all duration-75 ease-out ${
          isHovered
            ? 'w-3 h-3 bg-cyan-300 shadow-[0_0_12px_#38bdf8] scale-110'
            : isClicked
            ? 'w-2 h-2 bg-purple-300 scale-75'
            : 'w-2.5 h-2.5 bg-indigo-400 shadow-[0_0_8px_#818cf8]'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 6 : isClicked ? 4 : 5)}px, ${
            position.y - (isHovered ? 6 : isClicked ? 4 : 5)
          }px, 0)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
