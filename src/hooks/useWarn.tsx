import { useEffect } from "react";
const useWarn = (unsavedChanges: boolean) => {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (unsavedChanges) {
                const message =
                    "cart item will lost";
                event.preventDefault();
                event.returnValue = message;
                return message;
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [unsavedChanges]);
};

export default useWarn;