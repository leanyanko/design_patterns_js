class proxy{
   constructor(fs_subject) {
        this.fs = fs_subject;
   }
//make sure that our proxy has exactly same interface as an initial filesystem
//exactly how we used it previously
//we can clone all the methods and override ones we want to use
    readFile(path, format, callback) {
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error('Can only read md'));
        }

        this.fs.readFile(path, format, (error, content) => {
            if (error) {
                console.error(error);
                return (callback(error));
            }

            return callback(null, content);
        })
    }
}

module.exports = proxy;
