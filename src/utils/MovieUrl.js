const getAllImgurl = (imageCatch)=>{
    return new URL(`../assets/movie-covers/${imageCatch}`, import.meta.url).href;    
}

export {getAllImgurl}