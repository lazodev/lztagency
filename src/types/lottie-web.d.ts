declare module 'lottie-web' {
    export interface AnimationItem {
      play(): void;
      stop(): void;
      pause(): void;
      destroy(): void;
      setSpeed(speed: number): void;
      setDirection(direction: number): void;
      playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
      setSubframe(useSubFrames: boolean): void;
    }
  
    export interface AnimationConfig {
      container: Element;
      renderer?: 'svg' | 'canvas' | 'html';
      loop?: boolean | number;
      autoplay?: boolean;
      animationData?: any;
      path?: string;
      rendererSettings?: {
        preserveAspectRatio?: string;
        clearCanvas?: boolean;
        progressiveLoad?: boolean;
        hideOnTransparent?: boolean;
        className?: string;
      };
      name?: string;
    }
  
    export function loadAnimation(params: AnimationConfig): AnimationItem;
    export function setSpeed(speed: number, animation?: AnimationItem): void;
    export function setDirection(direction: number, animation?: AnimationItem): void;
    export function stop(animation?: AnimationItem): void;
    export function play(animation?: AnimationItem): void;
    export function pause(animation?: AnimationItem): void;
    export function goToAndStop(value: number, isFrame?: boolean, animation?: AnimationItem): void;
    export function destroy(animation?: AnimationItem): void;
    export function registerAnimation(element: Element, animationData?: any): void;
    export function searchAnimations(
      animationData?: any,
      standalone?: boolean,
      renderer?: 'svg' | 'canvas' | 'html'
    ): void;
    export function setQuality(quality: string | number): void;
  }
  