<template>
    <tr >
          <td v-for="td in data" :key="td.id">
            <span v-if="!td.handle" :class="td.class">
                {{ td.data }}
            </span>
            <div v-else class="center">
                <nuxt-link
                    v-if="td.edit"
                    :to="{ name: td.router, params: { id: td.data } }"
                    :class="td.class"
                >
                <i class="fas fa-edit    "></i>
                </nuxt-link>
                <nuxt-link
                    v-if="td.view"
                    :to="{ name: td.router, params: { id: td.data } }"
                    :class="td.class"
                >
                <i class="fas fa-image    "></i>
                </nuxt-link>
                <a
                    v-if="td.enable"
                    @click="update(td.data, td.value,td.column)"
                    :class="td.class+' d-block'"
                >
                    <i
                        :class="
                            td.value == 1 ? ` fa fa-check` : 'fas fa-times red'
                        "
                    ></i>
                </a>
                <a v-if="td.remove" @click="remove(td.data)" :class="td.class+' d-block'">
                    <i class="fas fa-trash    "></i>
                </a>
                <a v-if="td.duplicase" @click="duplicateItem(td.data)" :class="td.class+' d-block'">
                    <i class="fas fa-clone"></i>
                </a>
                <img
                    class="avatar block m-auto"
                    @error="imageUrlAlt"
                    v-if="td.thumbnail"
                    :src="rootURL + '/' + td.data"
                    alt=""
                />
            </div>
        </td >
    </tr>
</template>

<script>
export default {
  
    props: ["data"],
    computed: {
        rootURL() {
            return process.env.ROOT_URL;
        }
     
    },
    methods: {
        update(id, value,column) {
            this.$emit("onUpdate", id, value,column);
        },
        remove(id) {
            this.$emit("onRemove", id);
        },
        duplicateItem(id) {
            this.$emit("onDuplicate", id);
        },
        imageUrlAlt(event) {
            event.target.src =
                "https://semantic-ui.com/images/wireframe/square-image.png";
        }
    }
};
</script>

<style scoped>
.red {
    color: red;
}
img.avatar {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
}
.center {
    text-align: center;
}
</style>
