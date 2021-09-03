import { BANNER, POP_UP, SOCIAL } from "../models/AdStyle";

const hijacked_articles = [
  {
    id: 0,
    brand: {
      _id: 1,
      name: "Tesla",
      slogan: `In bros we trust`,
      avatar:
        "https://i.pinimg.com/736x/b0/46/8c/b0468c61baa72515ada2838c236466e8--tesla-shares-nikola-tesla.jpg",
    },
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
      img: "https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376",
    },
  },
  {
    id: 1,
    brand: {
      _id: 1,
      name: "Tesla",
      slogan: `In bros we trust`,
      avatar:
        "https://i.pinimg.com/736x/b0/46/8c/b0468c61baa72515ada2838c236466e8--tesla-shares-nikola-tesla.jpg",
    },
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
      img: "https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376",
    },
  },
  {
    id: 2,
    brand: {
      _id: 1,
      name: "Tesla",
      slogan: `In bros we trust`,
      avatar:
        "https://i.pinimg.com/736x/b0/46/8c/b0468c61baa72515ada2838c236466e8--tesla-shares-nikola-tesla.jpg",
    },
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
      img: "https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376",
    },
  },
  {
    id: 3,
    brand: {
      _id: 1,
      name: "Tesla",
      slogan: `In bros we trust`,
      avatar:
        "https://i.pinimg.com/736x/b0/46/8c/b0468c61baa72515ada2838c236466e8--tesla-shares-nikola-tesla.jpg",
    },
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
      img: "https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376",
    },
  },
  {
    id: 4,
    brand: {
      _id: 1,
      name: "Tesla",
      slogan: `In bros we trust`,
      avatar:
        "https://i.pinimg.com/736x/b0/46/8c/b0468c61baa72515ada2838c236466e8--tesla-shares-nikola-tesla.jpg",
    },
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
      img: "https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376",
    },
  },
  {
    id: 5,
    brand: {
      _id: 1,
      name: "Tesla",
      slogan: `In bros we trust`,
      avatar:
        "https://i.pinimg.com/736x/b0/46/8c/b0468c61baa72515ada2838c236466e8--tesla-shares-nikola-tesla.jpg",
    },
    trend_img:
      "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    date: "21 Jaunary 2013",
    link: "https://www.politico.com/news/magazine/2021/08/21/goodbye-to-all-that-clickbait-506479",
    message: {
      _id: "0",
      message: "The message",
      style: "POP_UP",
      img: "https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376",
    },
  },
];

export default hijacked_articles;
