import Vue from "vue";
Vue.mixin({
  data() {
    return {
      configLayout: {
        default: {
          sort: {
            title: "Set category level",
            type: "position",
            value: []
          },
          popular: {
            title: "Category popular (home page)",
            type: "position",
            value: []
          },
          address_footer: {
                title:'Address for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         facebook: {
                title:'Facebook url for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         instagram: {
                title:'Instagram url for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         linkedin: {
                title:'Linkedin url for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         whatsapp: {
                title:'Whatsapp url for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         messenger: {
                title:'Messenger url for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         copyright: {
                title:'Copyright for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },
         copyright1: {
                title:'Copyright for footer',
                type:'text',
                url:false,
                value:{value:'',url:''}
         },

          //   title: {
          //       title:'Title',
          //       type:'text',
          //       url:false,
          //       value:{value:'',url:''}
          //   },
          //   textarea: {
          //       title:'Desciprtion',
          //       type:'textarea',
          //       url:false,
          //       value:{value:'',url:''}
          //   },
          //   editor: {
          //       title:'Editor',
          //       type:'editor',
          //       url:false,
          //       value:{value:'',url:''}
          //   },
        },
        page: {
          website: {
            title: "Category for website",
            type: "position",
            value: []
          },
          contact: {
            title: "Contact for website",
            type: "position",
            value: []
          },
          fav_icon: {
            title: "Fav icon",
            type: "image",
            url: false,
            value: { value: "", url: "" }
          },
          slider: {
            title: "Sliders for website",
            type: "images",
            value: []
          },
          logo: {
            title:'Logo',
            type:'image',
            url:false,
            value:{value:'',url:''}
          },
        }
      }
    };
  },
  methods: {
    addToCart(id, quantity) {
      const data = { id: id, quantity: quantity };
      this.$store.dispatch("cart/addToCart", data, { root: true });
    }
  }
});
