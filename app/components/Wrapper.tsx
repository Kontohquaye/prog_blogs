"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  //
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (
        (wrapper.current && !wrapper.current.contains(e.target as Node)) ||
        e.target === overlay.current
      ) {
        if (onDismiss) onDismiss();
      }
    },
    [wrapper, onDismiss]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <div
      ref={overlay}
      className="  fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] mx-auto sm:mx-0 sm:w-10/12 md:w-8/12 lg:w-1/2 p-6 bg-white dark:bg-softDark"
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
