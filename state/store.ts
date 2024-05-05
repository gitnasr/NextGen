import {create} from "zustand";

type Posts = {
    count:number;
    currentPost?:any
    setCurrentPost?:any
}

const  useStore = create<Posts>((set) => ({
    // state variables
    count:15,
    currentPost:undefined,
    // actions
    setCurrentPost:(post:any) => set((state) => ({currentPost:post}))
}))
export default useStore;
