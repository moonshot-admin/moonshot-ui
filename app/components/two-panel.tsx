import React, { useState, useRef, useEffect } from 'react';

function TwoPanel({ children }: { children: React.ReactNode[] }) {
  const [dividerPosition, setDividerPosition] = useState(40);
  const dividerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newDividerPosition =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setDividerPosition(newDividerPosition);
  };

  const stopResizing = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResizing);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full h-full select-none">
      <div
        className="h-full overflow-x-hidden overflow-y-auto custom-scrollbar"
        style={{ width: `${dividerPosition}%` }}>
        {children[0]}
      </div>
      <div
        ref={dividerRef}
        onMouseDown={startResizing}
        className="
          cursor-col-resize h-full w-1.5  
          bg-fuchsia-1000/80
          dark:bg-neutral-900/70 "
      />
      <div
        className="h-full overflow-x-hidden overflow-y-auto custom-scrollbar"
        style={{
          width: `${100 - dividerPosition}%`,
          height: '100%',
        }}>
        {children[1]}
      </div>
    </div>
  );
}

export default TwoPanel;
