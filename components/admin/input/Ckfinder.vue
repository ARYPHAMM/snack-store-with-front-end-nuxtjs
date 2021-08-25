<template>
    <div class="input__thumbnail">
        <div>
            <img
                :id="image_id"
                :src="this.URL"
                 @error="imageUrlAlt"
            />
        </div>
        <div class="mt-1">
            <label class="btn btn-primary shadow rounded-0 pr-1" @click="openBrowser(image_id, id)">
                Upload image
            </label>
            <label class="btn btn-danger shadow rounded-0" @click="emptyImage(image_id, id)">
                Remove
            </label>
        </div>
        <input :id="id" type="hidden" />
        <div id="ckfinder1">
            
        </div>
    </div>
</template>

<script>
export default {

    props: ["id", "image_id", "value"],
    computed:{
        URL(){
            return (this.value == '' || this.value == null ? '' : process.env.ROOT_URL+'/'+ this.value);
        }
    },
    data() {
        return {
            val: null
        };
    },
    watch: {
     value(value, val) {
        this.val = (value == '' || value == null ? '' : value);
      }
    },
    created() {
         this.val = '' ? '' :  this.value;
         this.value == '' ? '' : process.env.ROOT_URL+ '/' + this.value;
    },
    methods: {
        openBrowser(imgid, inputid, rf = undefined, cb = undefined) {
            let app = this;
            CKFinder.popup({
                chooseFiles: true,
                chooseFilesOnDblClick: true,
                width: 800,
                height: 600,
                onInit: function(finder) {
                    // finder.on("files:selected", function(evt) {
                    //     fileSeleted = evt.data.files;
                    // });
                    finder.on("files:choose", function(evt) {
                        if (!rf) {
                            var file = evt.data.files.first();
                            var output = document.getElementById(
                                inputid
                                // .replace("#", "")
                            );
                            var view = document.getElementById(
                                imgid
                                // .replace("#", "")
                            );
                            view.src = process.env.ROOT_URL+ "/" + file.getUrl();
                            output.value = file.getUrl();
                            app.val = file.getUrl();
                        } else {
                            // var files = evt.data.files;
                            // var files = fileSeleted;
                            // var chosenFiles = "";
                            // files.forEach(function(file, i) {
                            //     chosenFiles +=
                            //         i + 1 + ". " + file.get("name") + "\n";
                            //     addToImagList(file.getUrl());
                            // });
                            // refreshImageList();
                        }
                    });
                    // finder.on("file:choose:resizedImage", function(evt) {
                    //     var output = document.getElementById(
                    //         inputid
                    //         // .replace("#", "")
                    //     );
                    //     output.value = evt.data.resizedUrl;
                    // });
                }
            });
        },
        emptyImage(imgid, inputid) {
            var output = document.getElementById(inputid);
            var view = document.getElementById(imgid);
            view.src = "https://semantic-ui.com/images/wireframe/image.png";
            output.value = this.val = "";
        },
        imageUrlAlt(event) {
          
            event.target.src =
                "https://semantic-ui.com/images/wireframe/square-image.png";
        }
    }
};
</script>

<style scoped>
.input__thumbnail img {
    width: 150px;
    height: 150px;
    object-fit: contain;
}
.input__thumbnail {
    display: flex;
    flex-direction: column;
}
</style>
