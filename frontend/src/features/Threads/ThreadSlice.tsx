import { createSlice } from "@reduxjs/toolkit"
// import { v4 as uuidv4 } from 'uuid';

const initialThreads ={
    threads: [
        {
            id: 1,
            threadText: "As a budding structural engineer, I am constantly in awe of the complexity and elegance of the structures that surround us. From high-rise buildings to bridges, my goal is to create designs that are not only safe and functional, but also aesthetically pleasing. I am eager to learn and grow in this field and can't wait to see what the future holds for me in structural engineering! #StructuralEngineering #BuildingDesign #Inspiration",
            image:"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
            username:"John David",
            usertitle:"Software Engineer",
            date:"1 hour",
            loveCount: 14,
            disabled: false,
            comments: [
                {
                    threadId: 1,
                    commentId: 1,
                    commentText: "first comment here",
                    reply: [
                        {
                            threadId: 1,
                            commentId: 1,
                            replyId: 1,
                            replyText: "first comment replied here",
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            threadText: "Budding structural engineer, I am constantly in awe of the complexity and elegance of the structures that surround us. From high-rise buildings to bridges, my goal is to create designs that are not only safe and functional, but also aesthetically pleasing. I am eager to learn and grow in this field and can't wait to see what the future holds for me in structural engineering! #StructuralEngineering #BuildingDesign #Inspiration",
            image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            username:"Mustafizur Rahman",
            usertitle:"Structural Engineer",
            date:"8 hour",
            loveCount: 3,
            disabled: false,
            comments: [
                {
                    threadId: 2,
                    commentId: 2,
                    commentText: "second comment here",
                    reply: [
                        {
                            threadId: 2,
                            commentId: 2,
                            replyId: 2,
                            replyText: "second comment replied here",
                        }
                    ]
                }
            ]
        },
    ],
}

export const threadSlice = createSlice({
    name:"threads",
    initialState:initialThreads,
    reducers:{
        showThreads:(state)=>state,
        addThreads: (state, action)=>{
            state.threads.unshift(action.payload)
        },
        deleteThreads:(state,action)=>{
            const id = action.payload;
            state.threads = state.threads.filter((thread) => thread.id !== id);
        },
        updateThreads: (state, action) => {
            const { id, threadText } = action.payload;
            const isThreadExist = state.threads.filter((thread) => thread.id === id);

            if (isThreadExist) {
                isThreadExist[0].threadText = threadText;
            }
        },
        loveCountIncrement: (state, action) => {
            const id = action.payload;
            const isThreadExist = state.threads.filter((thread) => thread.id == id);

            if (isThreadExist) {
                isThreadExist[0].loveCount = isThreadExist[0].loveCount + 1;
                isThreadExist[0].disabled = true;
            }

        },
        loveCountDecrement: (state, action) => {
            const id = action.payload;
            const isThreadExist = state.threads.filter((thread) => thread.id == id);

            if (isThreadExist) {
                isThreadExist[0].loveCount = isThreadExist[0].loveCount - 1;
                isThreadExist[0].disabled = false;
            }
        },
        addComment: (state, action) => {
            const { threadId, commentId, commentText, reply } = action.payload;
            const isThreadExist = state.threads.filter((thread) => thread.id === threadId);

            if (isThreadExist) {
                isThreadExist[0].comments.unshift(action.payload)
            }
        },
    }
})
export const {showThreads,addThreads,deleteThreads,updateThreads,loveCountIncrement,loveCountDecrement,addComment} = threadSlice.actions;
export default threadSlice.reducer;