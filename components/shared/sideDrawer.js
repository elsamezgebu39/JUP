"use client";

import {
  useCallback,
  useEffect,
  useRef,
} from "react";
import FocusTrap from "focus-trap-react";
import useWindowSize from "@/lib/hooks/use-window-size";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

export default function SideDrawer({
  children,
  showModal,
  setShowModal,
}) {
  const desktopModalRef = useRef(null);
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  const leafletRef = useRef(null);
  const controls = useAnimation();
  const transitionProps = { type: "spring", stiffness: 200, damping: 30 };
  useEffect(() => {
    controls.start({
      x: 20,
      transition: transitionProps,
    });
  }, []);


  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const { isMobile, isDesktop } = useWindowSize();

  async function handleDragEnd(_, info) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const width = leafletRef.current?.getBoundingClientRect().width || 0;
    if (offset > width / 2 || velocity > 800) {
      await controls.start({ x: "100%", transition: transitionProps });
      setShowModal(false);
    } else {
      controls.start({ x: 0, transition: transitionProps });
    }
  }
  return (
    <AnimatePresence>
      {showModal && (
        <>
          {isMobile &&
            <AnimatePresence>
              <motion.div
                ref={leafletRef}
                key="leaflet"
                className="group fixed inset-y-0 left-7 z-40 w-screen cursor-grab bg-white pb-5 active:cursor-grabbing sm:hidden"
                initial={{ x: "100%" }}
                animate={controls}
                exit={{ x: "100%" }}
                transition={transitionProps}
                drag="x"
                dragDirectionLock
                onDragEnd={handleDragEnd}
                dragElastic={{ left: 1, right: 1 }}
                dragConstraints={{ left: 2, right: 0 }}
              >
                <div
                  className={`rounded-t-4xl -mb-1 flex h-7 w-full absolute top-1/2`}
                >
                  <div className="-ml-0.5 h-10 w-1 rounded-full bg-gray-300 transition-all group-active:rotate-12" />
                  <div className="h-10 w-1 rounded-full bg-gray-300 transition-all group-active:-rotate-12" />
                </div>
                {children}
              </motion.div>
              <motion.div
                key="leaflet-backdrop"
                className="fixed inset-0 z-30 bg-gray-800 bg-opacity-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
              />
            </AnimatePresence>}
        </>
      )}
    </AnimatePresence>
  );
}

