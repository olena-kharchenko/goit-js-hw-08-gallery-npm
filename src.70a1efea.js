parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tW6H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGalleryMarkup=void 0;var e=function(e){return e.map(function(e){var n=e.preview,a=e.original,r=e.description;return'\n    <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="'.concat(a,'"\n  >\n    <img\n      class="gallery__image"\n      src="').concat(n,'"\n      data-source="').concat(a,'"\n      alt="').concat(r,'"\n    />\n  </a>\n</li>\n    ')}).join("")};exports.createGalleryMarkup=e;
},{}],"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;var e=require("./markup.js"),r=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}var l={galleryList:document.querySelector(".js-gallery"),galleryMarkup:(0,e.createGalleryMarkup)(r.default),modal:document.querySelector(".js-lightbox"),modalCloseBtn:document.querySelector('button[data-action="close-lightbox"]'),modalImage:document.querySelector(".lightbox__image"),modalOverlay:document.querySelector(".lightbox__overlay")};exports.refs=l;
},{"./markup.js":"tW6H","./gallery-items.js":"q5Rn"}],"vwdI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onCloseModal=o,exports.onBOverlayClick=s;var e=require("./refs.js"),r=require("./open-modal");function o(){e.refs.modal.classList.remove("is-open"),e.refs.modalImage.src="",e.refs.modalImage.alt="",window.removeEventListener("keydown",r.onEscKeyPress)}function s(e){e.currentTarget===e.target&&o()}
},{"./refs.js":"VyiV","./open-modal":"n7vg"}],"n7vg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onOpenModal=o,exports.onEscKeyPress=t;var e=require("./refs.js"),s=require("./close-modal");function o(s){"IMG"===s.target.nodeName&&(s.preventDefault(),e.refs.modal.classList.add("is-open"),e.refs.modalImage.src=s.target.dataset.source,e.refs.modalImage.alt=s.target.alt,window.addEventListener("keydown",t))}function t(e){"Escape"===e.code&&(0,s.onCloseModal)()}
},{"./refs.js":"VyiV","./close-modal":"vwdI"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./js/refs.js"),r=require("./js/open-modal.js"),s=require("./js/close-modal.js");e.refs.galleryList.insertAdjacentHTML("beforeend",e.refs.galleryMarkup),e.refs.galleryList.addEventListener("click",r.onOpenModal),e.refs.modalCloseBtn.addEventListener("click",s.onCloseModal),e.refs.modalOverlay.addEventListener("click",s.onBOverlayClick);
},{"./js/refs.js":"VyiV","./js/open-modal.js":"n7vg","./js/close-modal.js":"vwdI"}]},{},["Focm"], null)
//# sourceMappingURL=%27/goit-js-hw-08-gallery-npm%27/src.70a1efea.js.map