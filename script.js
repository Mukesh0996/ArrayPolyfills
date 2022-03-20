// const inp = document.querySelector("input[type='file']");
// const img = document.querySelector("img");
// inp.addEventListener("change",(e) =>{
//     console.log(e.target.files[0]);
//     img.src = URL.createObjectURL(e.target.files[0]);
// })

// polyfill for findIndex
if(!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype,"findIndex", {
        value: function (cb) {
            if(typeof cb !== "function") {
                throw new TypeError("Callback function must be a function")
            }
            if(this === null) {
                throw new TypeError("findIndex is not called on an Array")
            }
            var requiredArray = Object(this), len = requiredArray.length, k=0;
            while(k<len) {
                var value = requiredArray[k];
                if(cb.call(undefined, value, k, requiredArray)) {
                    return k;
                }
                k++
            }
            return -1;
        }
    })
}

//polyfill for find
if(!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
        value : function (cb) {
            if(typeof cb !== "function") {
                throw new TypeError("Callback function must be a function")
            }
            if(this === null) {
                throw new TypeError("find is not called on an Array")
            }
            var requiredArray = Object(this), len = requiredArray.length, k=0;
            while(k<len) {
                var value = requiredArray[k];
                if(cb.call(undefined, value, requiredArray)) {
                    return value;
                }
                k++
            }
            return undefined;
        },
    })
}
