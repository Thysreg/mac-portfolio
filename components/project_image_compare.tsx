// components/ImageSlider.tsx
"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt: string;
  afterAlt: string;
  width?: number;
  height?: number;
}

export default function ImageSlider({ 
  before, 
  after, 
  beforeLabel = 'Original', 
  afterLabel = 'Redesign',
  beforeAlt,
  afterAlt,
  width = 1180,
  height = 864
}: ImageSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    const afterImage = afterImageRef.current;
    if (!container || !handle || !afterImage) return;

    const updateSlider = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      let pos = ((clientX - rect.left) / rect.width) * 100;
      pos = Math.min(100, Math.max(0, pos));
      
      // Update both clip path and handle position
      afterImage.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
      handle.style.left = `${pos}%`;
      container.setAttribute('aria-valuenow', pos.toString()); // Convert to string
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    const endDrag = () => {
      isDragging.current = false;
      document.body.style.removeProperty('cursor');
    };

    const startDrag = () => {
      isDragging.current = true;
      document.body.style.cursor = 'ew-resize';
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentPos = parseFloat(container.getAttribute('aria-valuenow') || '50');
      let newPos = currentPos;
      
      if (e.key === 'ArrowLeft') newPos = Math.max(0, currentPos - 2);
      if (e.key === 'ArrowRight') newPos = Math.min(100, currentPos + 2);
      
      if (newPos !== currentPos) {
        e.preventDefault();
        updateSlider((newPos * container.clientWidth / 100) + container.getBoundingClientRect().left);
      }
    };

    // Event listeners
    container.addEventListener('mousedown', startDrag);
    container.addEventListener('touchstart', startDrag);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove as EventListener);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('mousedown', startDrag);
      container.removeEventListener('touchstart', startDrag);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove as EventListener);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const aspectRatio = width / height;

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-gray-100 rounded-lg overflow-hidden select-none"
      style={{ 
        aspectRatio: aspectRatio,
        maxHeight: '80vh' // Optional limit
      }}
      tabIndex={0}
      role="slider"
      aria-valuenow={50}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Image comparison slider"
    >
      {/* Base Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={before} 
          alt={beforeAlt}
          width={width}
          height={height}
          className="w-full h-full object-cover pointer-events-none"
          priority
          quality={85}
        />
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Clipped Image */}
      <div 
        ref={afterImageRef}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: 'inset(0 50% 0 0)' }}
      >
        <Image 
          src={after} 
          alt={afterAlt}
          width={width}
          height={height}
          className="w-full h-full object-cover pointer-events-none"
          priority
          quality={85}
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        ref={handleRef}
        className="absolute top-0 bottom-0 w-8 -ml-4 cursor-ew-resize z-10"
        style={{ left: '50%' }}
        aria-hidden="true"
      >
        <div className="w-1 h-full bg-black/10 shadow-lg mx-auto transition-all duration-100 hover:w-1.5 hover:bg-black/25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-500 rounded-full shadow-md flex items-center justify-center">
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M8 3v18M16 3v18" />
          </svg>
        </div>
      </div>
    </div>
  );
}