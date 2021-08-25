import axios from "axios";
const webpack = require("webpack");
module.exports = {
  loading: '~/components/LoadingBar.vue',
  target: 'static',
  // devtools: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: "snack-store123",
    htmlAttrs: {
      lang: "vi"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { href: "http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" }
    ],
    script: [
      {
        src: "/js/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/jquery-ui.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/swiper.min.js",
        type: "text/javascript"
      },
      // {
      //   src: "/js/bootstrap.min.js",
      //   type: "text/javascript"
      // }
    ]
  },
  components: [
    {
      path: "~/components/user/",
      prefix: "User"
    },
    {
      path: "~/components/admin/",
      prefix: "Admin"
    },
    {
      path: "~/components/admin/input",
      prefix: "Admin-Input"
    },
    {
      path: "~/components/admin/table",
      prefix: "Admin-Table"
    }
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/swiper.min.css",
    // "@/assets/css/bootstrap.min.css",
    "@/assets/fontawesome/css/all.min.css",
    "@/assets/css/style.css"
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/assets/js/bootstrap.bundle.min.js", mode: "client" },
    { src: "~/config/ui.js" },
    { src: '~/plugins/router.js', mode: 'client' },
    // { src: '~/plugins/after-each.js', mode: 'server' }
    // { src: "~/assets/js/jquery-3.5.1.slim.min.js", mode: "client" },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],
    // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    baseURL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:8000/api"
        : "https://domain/api"
    // proxy: true,
  },
  auth: {
    redirect: {
      callback: "/" //sau khi login sẽ chuyển hướng về đây
    },
    scopeKey: "role",
    strategies: {
      local: {
        token: {
          property: "token",
          global: true
        },
        // user: {
        //   // property: "user",
        //   autoFetch: true
        // },
        endpoints: {
          login: { url: "/login", method: "post", propertyName: false },
          user: { url: "/user", method: "get", propertyName: false },
          logout: { url: "/logout", method: "get" }
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   vendor: ["jquery"],
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: "jquery"
  //     })
  //   ],
  // }
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  router: {
    // middleware:'stats',
    base: "/",
    async extendRoutes(routes, resolve) {
      // const response = await axios
      //   .get(`http://localhost:8000/api/get-url`)
      //   .then(res => {
      //     res.data.categories.map(currentValue => {
      //       if (currentValue.type == "product")
      //       {
      //         routes.push({
      //           path: "/" + currentValue.url,
      //           component: resolve(__dirname, "pages/product/index.vue"),
      //           props: ({ item: currentValue })
      //         });
      //       }
      //     });
      //     res.data.products.map(currentValue => {
      //         routes.push({
      //           path: "/" + currentValue.url,
      //           component: resolve(__dirname, "pages/product/_id.vue"),
      //           props: ({ item: currentValue })
      //         });
          
      //     });
      //   });

      routes.push(
        {
          path: '*',
          component: resolve(__dirname, 'pages/404.vue')
        },
        {
          path: "/register",
          component: resolve(__dirname, "pages/user/register.vue")
        },
        {
          path: "/login",
          component: resolve(__dirname, "pages/user/login.vue")
        },
        {
          path: "/cart",
          component: resolve(__dirname, "pages/cart.vue")
        }
      );
    }
  },
  // generate: {
  //   async routes() {
  //     const response = await axios
  //       .get(`http://localhost:8000/api/get-url`)
  //       .then(res => {
  //         res.data.categories.map(currentValue => {
  //           if (currentValue.type == "product")
  //           {
  //             routes.push({
  //               path: "/" + currentValue.url,
  //               component: resolve(__dirname, "pages/product/index.vue"),
  //               props: ({ item: currentValue })
  //             });
  //           }
  //         });
  //         res.data.products.map(currentValue => {
  //             routes.push({
  //               path: "/" + currentValue.url,
  //               component: resolve(__dirname, "pages/product/_id.vue"),
  //               props: ({ item: currentValue })
  //             });
          
  //         });
  //       });
  //   }
  // },
  env: {
    ROOT_URL: "http://localhost:8000",
    STRIPE_PUBLISHABLE_KEY:'pk_test_RzeE0Y6x35ftiTEQUhz9LSjj00fb8ZtjsY'
  },
  publicRuntimeConfig: {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  },
};
