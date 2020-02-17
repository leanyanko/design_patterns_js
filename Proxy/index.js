var Image = (function () {
    function create(filename) {
        console.log('Creating ' + filename);
       return {
           filename : filename,

           displayImage: function () {
               console.log('Displaying ' + filename)
           }
       }
    }
    return create;
})();


var ImageProxy = (function() {
    var filename;
    function create(filename) {
        if (!filename) {
            this,filename = filename;
            console.log('Creating ' + filename);
        }

        return {
            filename : filename,

            displayImage: function () {
                console.log('Displaying ' + filename)
            }
        }
    }
    return create;
})();


// var ImageProxy = function

var image1 = Image("cat");
image1.displayImage();

var image2 = Image("dog");
image2.displayImage();
