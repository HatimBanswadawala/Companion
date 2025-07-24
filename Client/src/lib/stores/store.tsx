import { createContext } from "react";
import CounterStore from "./CounterStore";
import UiStore from "./UiStore";

interface Store {
    CounterStore : CounterStore,
    UiStore: UiStore
};

export const store : Store = {
    CounterStore: new CounterStore(),
    UiStore: new UiStore()
}

export const StoreContext = createContext(store);