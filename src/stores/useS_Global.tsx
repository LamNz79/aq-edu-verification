import { createGenericStore } from "aq-fe-framework/stores"
interface I {
    accreditationType?: "Institutional" | "Program"
}

const useStore = createGenericStore<I>({
    initialState: {},
    storageKey: "useS_Global"
})

export function useS_Global() {
    const store = useStore()

    return {
        ...store
    }
}