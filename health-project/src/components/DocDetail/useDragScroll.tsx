import { useRef, useState } from "react";

export function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);

  // Added React.MouseEvent type to 'e'
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // 2. Add an early return guard to make sure the ref exists
    if (!scrollRef.current) return;

    setIsDown(true);
    setMouseDownX(e.pageX);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDown(false);
  };

  //Added React.MouseEvent type to 'e'
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //Guard clause: Ensure mouse is down AND the ref isn't null
    if (!isDown || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  //Added React.MouseEvent type to 'e'
  const isClickAction = (e: React.MouseEvent) => {
    const dragDistance = Math.abs(e.pageX - mouseDownX);
    return dragDistance <= 5; 
  };

  return {
    scrollRef,
    isDown,
    events: {
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeaveOrUp,
      onMouseUp: handleMouseLeaveOrUp,
      onMouseMove: handleMouseMove,
    },
    isClickAction,
  };
}