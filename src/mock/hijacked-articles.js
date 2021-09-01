import { BANNER, POP_UP, SOCIAL } from "../models/AdStyle";

const hijacked_articles = [
  {
    id: 0,
    brand_img:
      "https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg",
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 January 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci sed libero blandit rutrum. Donec sodales consequat massa, vel sollicitudin nisi varius ut. Ut at nulla nunc. Quisque laoreet.",
      style: BANNER,
      img: "https://i.ibb.co/m5823d0/Group-31.png",
    },
  },
  {
    id: 1,
    brand_img:
      "https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg",
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 Jaunary 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci sed libero blandit rutrum. Donec sodales consequat massa, vel sollicitudin nisi varius ut. Ut at nulla nunc. Quisque laoreet.",
      style: POP_UP,
      img: "https://i.ibb.co/m5823d0/Group-31.png",
    },
  },
  {
    id: 2,
    brand_img:
      "https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg",
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 Jaunary 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci sed libero blandit rutrum. Donec sodales consequat massa, vel sollicitudin nisi varius ut. Ut at nulla nunc. Quisque laoreet.",
      style: SOCIAL,
      img: "https://i.ibb.co/m5823d0/Group-31.png",
    },
  },
  {
    id: 3,
    brand_img:
      "https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg",
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 Jaunary 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci sed libero blandit rutrum. Donec sodales consequat massa, vel sollicitudin nisi varius ut. Ut at nulla nunc. Quisque laoreet.",
      style: "SOCIAL",
      img: "https://i.ibb.co/m5823d0/Group-31.png",
    },
  },
  {
    id: 4,
    brand_img:
      "https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg",
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 Jaunary 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci sed libero blandit rutrum. Donec sodales consequat massa, vel sollicitudin nisi varius ut. Ut at nulla nunc. Quisque laoreet.",
      style: "POPUP",
      img: "https://i.ibb.co/m5823d0/Group-31.png",
    },
  },
  {
    id: 5,
    brand_img:
      "https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg",
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 Jaunary 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message: "The message",
      style: "POP_UP",
      img: "https://i.ibb.co/m5823d0/Group-31.png",
    },
  },
];

export default hijacked_articles;
