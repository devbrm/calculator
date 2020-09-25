import { useEffect, useRef } from "react";

function useEventListeners(eventType, handler) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    const internalHandler = (e) => handlerRef.current(e);

    document.addEventListener(eventType, internalHandler);
    return () => document.removeEventListener(eventType, internalHandler);
  }, [eventType]);
}

export default useEventListeners;
