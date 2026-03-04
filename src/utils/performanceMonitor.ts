import React from 'react';

// Performance monitoring utility for animations
interface PerformanceMetrics {
  fps: number;
  isLowPerformance: boolean;
  shouldDisableAnimations: boolean;
}

class AnimationPerformanceMonitor {
  private fps: number = 60;
  private frameCount: number = 0;
  private startTime: number = Date.now();
  private isMonitoring: boolean = false;
  private callbacks: ((metrics: PerformanceMetrics) => void)[] = [];

  startMonitoring() {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.frameCount = 0;
    this.startTime = Date.now();
    this.requestFrame();
  }

  stopMonitoring() {
    this.isMonitoring = false;
  }

  private requestFrame = () => {
    if (!this.isMonitoring) return;

    this.frameCount++;
    const currentTime = Date.now();
    const elapsed = currentTime - this.startTime;

    if (elapsed >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / elapsed);
      this.frameCount = 0;
      this.startTime = currentTime;
      
      const metrics = this.getMetrics();
      this.callbacks.forEach(callback => callback(metrics));
    }

    requestAnimationFrame(this.requestFrame);
  };

  getMetrics(): PerformanceMetrics {
    const isLowPerformance = this.fps < 30;
    const shouldDisableAnimations = this.fps < 20;

    return {
      fps: this.fps,
      isLowPerformance,
      shouldDisableAnimations,
    };
  }

  onMetricsChange(callback: (metrics: PerformanceMetrics) => void) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };
  }

  // Check device capabilities
  static getDeviceCapabilities() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEndDevice = navigator.hardwareConcurrency <= 2;
    const hasLimitedMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4;
    const hasSlowConnection = (navigator as any).connection && 
      ['slow-2g', '2g', '3g'].includes((navigator as any).connection.effectiveType);

    return {
      isMobile,
      isLowEndDevice,
      hasLimitedMemory,
      hasSlowConnection,
      shouldReduceAnimations: isLowEndDevice || hasLimitedMemory || hasSlowConnection,
    };
  }

  // Adaptive animation suggestions based on performance
  static getAnimationRecommendations(): {
    maxComplexAnimations: number;
    shouldUseTransforms: boolean;
    shouldPreferCSS: boolean;
    maxAnimationDuration: number;
  } {
    const capabilities = this.getDeviceCapabilities();
    
    if (capabilities.shouldReduceAnimations) {
      return {
        maxComplexAnimations: 2,
        shouldUseTransforms: true,
        shouldPreferCSS: true,
        maxAnimationDuration: 300,
      };
    }

    return {
      maxComplexAnimations: 10,
      shouldUseTransforms: true,
      shouldPreferCSS: false,
      maxAnimationDuration: 1000,
    };
  }
}

export const performanceMonitor = new AnimationPerformanceMonitor();

// React hook for performance monitoring
export const usePerformanceMonitoring = (enabled: boolean = true) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    fps: 60,
    isLowPerformance: false,
    shouldDisableAnimations: false,
  });

  React.useEffect(() => {
    if (!enabled) return;

    const unsubscribe = performanceMonitor.onMetricsChange(setMetrics);
    performanceMonitor.startMonitoring();

    return () => {
      unsubscribe();
      performanceMonitor.stopMonitoring();
    };
  }, [enabled]);

  return metrics;
};

export default AnimationPerformanceMonitor;