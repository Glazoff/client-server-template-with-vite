import React from 'react';

export const useObserve = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  status: unknown,
  callback: { (): void; (): void }
) => {
  const observer = React.useRef<any>();

  React.useEffect(() => {
    if (status !== 'success') return;
    // if (observer.current) return observer.current.disconnect();
    const cb = (entries: any, observer: any) => {
      if (entries[0].isIntersecting) {
        callback();
        console.log('div В зоне видимости', entries);
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [status]);
};
