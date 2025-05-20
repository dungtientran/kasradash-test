import { useEffect } from "react";

export const useWarnOnNavigate = (shouldWarn: boolean) => {
  useEffect(() => {
    if (!shouldWarn) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest("a");

      if (isLink) {
        const confirmLeave = window.confirm(
          "You have unsaved changes. Are you sure you want to leave?"
        );
        if (!confirmLeave) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [shouldWarn]);
};
