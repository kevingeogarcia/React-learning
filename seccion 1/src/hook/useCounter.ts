import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

interface HookProps {
  maxCount: number;
}
export const useCounter = ({ maxCount = 10 }: HookProps) => {

  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());


  const handlerClick = () => {
    // validara hasta donde llegara en el maximo numero
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" }).to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" }).pause()

  }, []);

  useEffect(() => {
    
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handlerClick,
  };
};
