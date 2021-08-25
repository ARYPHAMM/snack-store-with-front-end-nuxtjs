const state = {
  address:'',
  facebook:'',
  messenger:'',
  whatsapp:'',
  linkedin:'',
  instagram:'',
  copyright:'',
};
const mutations = {
   setAddress: (state, items) => {
       state.address = JSON.parse(items.value).value;
   },
   setFacebook: (state, items) => {
       state.facebook = JSON.parse(items.value).value;
   },
   setMessenger: (state, items) => {
       state.messenger = JSON.parse(items.value).value;
   },
   setWhatsapp: (state, items) => {
       state.whatsapp = JSON.parse(items.value).value;
   },
   setInstagram: (state, items) => {
       state.instagram = JSON.parse(items.value).value;
   },
   setLinkedin: (state, items) => {
       state.linkedin = JSON.parse(items.value).value;
   },
   setCopyright: (state, items) => {
       state.copyright = JSON.parse(items.value).value;
   },
   
};
export default {
   state,
   mutations
};
