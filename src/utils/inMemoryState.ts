
const InMemoryState: any = {}

export const setInMemoryState = (key: string, value: any)=>{
    InMemoryState[key] = value;
}

export const getInMemoryState = (key: string)=>{
    return InMemoryState[key];
}
