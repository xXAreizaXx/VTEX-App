// ReactJS
import { useState } from "react";

// Hooks
import useLocalStorage from "@hooks/useLocalStorage";

// Types
type stateReducer = {
    past: statePoint[];
    present: statePoint[];
    future: statePoint[];
};

export const useUndo = (initialState: statePoint[]) => {
    // Custom Hooks
    const [item, setItem] = useLocalStorage("state");

    const [state, setState] = useState<stateReducer>({
        past: item ? item.past : [],
        present: item ? item.present : initialState,
        future: item ? item.future : [],
    });    

    const canUndo = item ? item.past.length > 0 : state.past.length > 0;
    const canRedo = item ? item.future.length > 0 : state.future.length > 0;

    const undo = () => {
        if (!canUndo) return;

        const previous = state.past[state.past.length - 1];
        const newPast = state.past.slice(0, state.past.length - 1);

        setItem({
            past: newPast,
            present: previous,
            future: [state.present, ...state.future],
        });

        setState({
            past: newPast,
            present: previous,
            future: [state.present, ...state.future],
        });
    };

    const redo = () => {
        if (!canRedo) return;

        const next = state.future[0];
        const newFuture = state.future.slice(1);

        setItem({
            past: [...state.past, state.present],
            present: next,
            future: newFuture,
        });

        setState({
            past: [...state.past, state.present],
            present: next,
            future: newFuture,
        });
    };

    const set = (newPresent: statePoint[]) => {        
        if (newPresent === state.present) return;

        setItem({
            past: [...state.past, state.present],
            present: newPresent,
            future: [],
        });

        setState({
            past: [...state.past, state.present],
            present: newPresent,
            future: [],
        });
    };

    return {state, set, undo, redo, canUndo, canRedo};
};


export default useUndo;
