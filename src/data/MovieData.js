const data = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once upon a time",
    descreption: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter,",
    genre: "Comedy/Drama",
    rating: 5,
    price: 800,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "marriage strory",
    descreption: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter,",
    genre: "Comedy/Drama",
    rating: 3,
    price: 400,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "pain and gain",
    descreption: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter,",
    genre: "Comedy/Drama",
    rating: 6,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "iron man",
    descreption: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter,",
    genre: "Comedy/Drama",
    rating: 2,
    price: 100,
  },
  
]

function getAllDataMovie(){
  return data
}

export {getAllDataMovie}