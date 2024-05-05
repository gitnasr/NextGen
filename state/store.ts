import {create} from "zustand";

type Posts = {
    count:number;
    currentPost?:any
    setCurrentPost?:any
}

const  useStore = create<Posts>((set) => ({
    count:15,
    currentPost:undefined,
    setCurrentPost:(post:any) => set((state) => ({currentPost:post}))
}))
export default useStore;
