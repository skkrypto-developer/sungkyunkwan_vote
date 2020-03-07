import React, {useReducer, createContext, useContext, useRef} from 'react';

const InitialStudent = [
    {
        id: 1,
        password: 123456,
    },
    {
        id: 2,
        password: 987654,
    },
    {
        id: 3,
        password: 135790,
    },
    {
        id: 4,
        password: 246810,
    }
]

function VoteReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.Student);
        case 'WRONG':
            return 
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const VoteStateContext = createContext();
const VoteDispatchContext = createContext();
const VoteNextIdContext = createContext();

export function VoteProvider({children}) {
    const [state, dispatch] = useReducer(VoteReducer, InitialStudent);
    const NextId = useRef(5);

    return (
        <VoteStateContext.Provider value={state}>
            <VoteDispatchContext.Provider value={dispatch}>
                <VoteNextIdContext.Provider value={NextId}>
                    {children}
                </VoteNextIdContext.Provider>
            </VoteDispatchContext.Provider>
        </VoteStateContext.Provider>
    );
}

export function useVoteState(){
    const context = useContext(VoteStateContext);
    if(!context) {
        throw new Error('Cannot find VoteProvider');
    }
    return context;
}

export function useVoteDispatch() {
    const context = useContext(VoteDispatchContext);
    if(!context) {
        throw new Error('Cannot find VoteProvider');
    }
    return context;
}

export function useVoteNextId() {
    const context = useContext(VoteNextIdContext);
    if(!context) {
        throw new Error('Cannot find VoteProvider');
    }
    return context;
}

export default VoteReducer;