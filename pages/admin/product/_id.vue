<template>
  <div class=" w-100 d-flex justify-content-center bg-white">
    <form @submit.prevent="create" class=" col-md-10 mt-3 ">
      <h3 class="font-font-weight-lighter col-12 text-center text-uppercase ">
        Update category
      </h3>
      <div class="form-group col-md-4 col-12 mb-0 float-left">
        <label class="mb-0 font-weight-bold">Select level</label>
        <Admin-Input-SelectLevel
          ref="category_id"
          :value1="item.category_id_1"
          :value2="item.category_id_2"
          :value3="item.category_id_3"
        />
        <label class="mb-0 font-weight-bold">Thumbnail</label>
        <div>
          <Admin-Input-Ckfinder
            ref="thumbnail"
            :id="`thumbnail`"
            :image_id="`thumbnail_image`"
            :value="item.thumbnail"
          />
        </div>
        <div
          v-show="error.thumbnail != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.thumbnail }}</strong>
        </div>
      </div>
      <div class="form-group col-md-8 col-12 mb-0 float-left">
        <label class="mb-0 font-weight-bold">Title</label>
        <Admin-Input-Text
          ref="title"
          :value="item.title"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
        />
        <div
          v-show="error.title != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.title }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">Description</label>
        <Admin-Input-textarea
          ref="description"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter description..."
          rows="5"
          :value="item.description"
        />
        <div
          v-show="error.description != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.description }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">
          Images
        </label>
        <div>
          <Admin-Input-Images ref="images" :value="item.images" />
        </div>
        <label class="mb-0 font-weight-bold">Price</label>
        <Admin-Input-Text
          ref="price"
          :value="item.price"
          @inputOnChange="priceOnchange"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter price..."
        />
        <div v-show="price != ''" class="text-danger">
          {{ price }}
        </div>
        <div
          v-show="error.price != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.price }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">Price Sale</label>
        <Admin-Input-Text
          ref="price_sale"
          :value="item.price_sale"
          @inputOnChange="priceSaleOnchange"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter price_sale..."
        />
        <div v-show="price_sale != ''" class="text-danger">
          {{ price_sale }}
        </div>
        <div
          v-show="error.price_sale != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.price_sale }}</strong>
        </div>
      </div>
      <div class="form-group mb-1 col-12 float-left">
        <label class="mb-0 font-weight-bold">Content</label>
        <Admin-Input-Ckeditor
          ref="content"
          :id="'content'"
          :value="item.content"
        />
        <div
          v-show="error.content != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.content }}</strong>
        </div>
      </div>
      <div class="form-group col-md-6 col-12 mb-0 float-left">
        <label class="mb-0 font-weight-bold">Title (SEO)</label>
        <Admin-Input-Text
          ref="title_seo"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
          :value="item.title_seo"
        />
        <div
          v-show="error.title_seo != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.title_seo }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">Keyword (SEO)</label>
        <Admin-Input-Text
          ref="keyword_seo"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
          :value="item.keyword_seo"
        />
        <div
          v-show="error.keyword_seo != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.keyword_seo }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">Description (SEO)</label>
        <Admin-Input-textarea
          ref="description_seo"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
          rows="3"
          :value="item.description_seo"
        />
        <div
          v-show="error.description_seo != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.description_seo }}</strong>
        </div>
      </div>
      <div class="form-group col-md-6 col-12 mb-0 float-left">
        <label class="mb-0 font-weight-bold">H1 (SEO)</label>
        <Admin-Input-Text
          ref="h1_seo"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
          :value="item.h1_seo"
        />
        <div
          v-show="error.h1_seo != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.h1_seo }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">H2 (SEO)</label>
        <Admin-Input-Text
          ref="h2_seo"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
          :value="item.h2_seo"
        />
        <div
          v-show="error.h2_seo != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.h2_seo }}</strong>
        </div>
        <label class="mb-0 font-weight-bold">H3 (SEO)</label>
        <Admin-Input-Text
          ref="h3_seo"
          :type="'text'"
          class="form-control rounded-0 shadow-none"
          placeholder="Enter title..."
          :value="item.h3_seo"
        />
        <div
          v-show="error.h3_seo != ''"
          class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
          role="alert"
        >
          <strong>{{ error.h3_seo }}</strong>
        </div>
        <button type="submit" class="btn shadow btn-success float-right mt-2">
          Update
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import Ckfinder from "../../../components/admin/input/Ckfinder.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Ckfinder },
  layout: "admin",
  computed: {
    ...mapGetters({ getItem: "database/getItem" }),
    Id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      table: "products",
      item: {},
      price: "",
      price_sale: "",
      error: {
        title: "",
        thumbnail: "",
        description: "",
        content: "",
        keyword_seo: "",
        title_seo: "",
        description_seo: "",
        h1_seo: "",
        h2_seo: "",
        h3_seo: "",
        price: "",
        price_sale: ""
      }
    };
  },
  watch: {
    getItem(val) {
      this.item = val;
      this.priceOnchange(this.item.price); // get view format price
      this.priceSaleOnchange(this.item.price_sale);  // get view format price sale

    }
  },
  mounted() {
    const formData = {
      table: this.table,
      id: this.Id
    };
    this.fetchItem(formData);
  },
  methods: {
    ...mapActions({
      fetchItem: "database/fetchItem",
      updateItem: "database/updateItem"
    }),
    create() {
      const formData = new FormData();
      formData.append("table", this.table);
      formData.append("id", this.Id);
      formData.append("title", this.$refs["title"].val || "");
      formData.append("description", this.$refs["description"].val || "");
      formData.append("content", this.$refs["content"].val || "");
      formData.append("thumbnail", this.$refs["thumbnail"].val || "");
      formData.append("images", JSON.stringify(this.$refs["images"].val) || "");
      formData.append("title_seo", this.$refs["title_seo"].val || "");
      formData.append(
        "description_seo",
        this.$refs["description_seo"].val || ""
      );
      formData.append("keyword_seo", this.$refs["keyword_seo"].val || "");
      formData.append("h1_seo", this.$refs["h1_seo"].val || "");
      formData.append("h2_seo", this.$refs["h2_seo"].val || "");
      formData.append("h3_seo", this.$refs["h3_seo"].val || "");
      formData.append("price", this.$refs["price"].val || "");
      formData.append("price_sale", this.$refs["price_sale"].val || "");
      formData.append(
        "category_id_1",
        this.$refs["category_id"].category_id_1 || ""
      );
      formData.append(
        "category_id_2",
        this.$refs["category_id"].category_id_2 || ""
      );
      formData.append(
        "category_id_3",
        this.$refs["category_id"].category_id_3 || ""
      );
      this.updateItem(formData)
        .then(res => {
          this.$router.push("/admin");
        })
        .catch(error => {
          for (var k in this.error) {
            if (error.response.data.errors[k] != null)
              this.error[k] = error.response.data.errors[k][0];
            else this.error[k] = "";
          }
        });
    },
    priceOnchange(price) {
      this.price = price;
      if (this.price != undefined && this.price != "") {
        if (
          parseFloat(this.$refs["price_sale"].val) >
          parseFloat(this.$refs["price"].val)
        ) {
          this.price_sale = this.$refs["price"].val;
          this.$refs["price_sale"].val = this.$refs["price"].val;
        }
        this.price = parseFloat(this.price).toLocaleString();
      } else {
        this.price = "";
      }
    },
    priceSaleOnchange(price) {
      this.price_sale = !isNaN(price) ? price : "";
      if (this.price_sale != undefined && this.price_sale != "") {
        if (
          parseFloat(this.$refs["price_sale"].val) >
          parseFloat(this.$refs["price"].val)
        ) {
          this.price_sale = this.$refs["price"].val;
          this.$refs["price_sale"].val = this.$refs["price"].val;
          alert("Price sale less than or equal price!!!");
        }
        this.price_sale = parseFloat(this.price_sale).toLocaleString();
      } else {
        this.price_sale = "";
      }
    }
  }
};
</script>
<style></style>
