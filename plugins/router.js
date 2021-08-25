import { resolve } from "path";
import axios from "axios";
import productDetail from "../pages/product/_id";
import product from "../pages/product/index";
import postDetail from "../pages/post/_id";
import page from "../pages/page";
export default async ({ app }) => {

  let url = window.location.pathname;
  if (!url.match(/admin/g)) {
    const response = app.$axios
      .get(`${process.env.ROOT_URL}/api/get-url`)
      .then(res => {
        res.data.categories.map(currentValue => {
          app.router.addRoute({
            path: "/" + currentValue.url,
            component: currentValue.type == "product" ? product : page,
            props: { item: currentValue }
          });
        });
        res.data.products.map(currentValue => {
          app.router.addRoute({
            path: "/" + currentValue.url,
            component: productDetail,
            props: { item: currentValue }
          });
        });
        res.data.posts.map(currentValue => {
          app.router.addRoute({
            path: "/" + currentValue.url,
            component: postDetail,
            props: { item: currentValue }
          });
        });
      });
  }
};
