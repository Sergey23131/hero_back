module.exports = {
    checkfile: (req, res, next) => {
        try {
            const {txt} = req.files || {};

            if (!txt) {
                throw new Error('there is no require file');
            }

            const {size, mimetype} = txt;

            if (!DOCS_MIMETYPES.includes(mimetype)) {
                throw new ErrorHandler(errors_massage.WRONG_FORMAT, errors_code.NOT_VALID);
            }

            if (size > FILE_MAX_SIZE) {
                throw new ErrorHandler(errors_massage.MAX_SIZE, errors_code.NOT_VALID);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    readfile: async (req, res, next) => {
        try {
            const myFile = req.files.img;//img(name of field in postman)

            await myFile.mv(filepath);

            next();
        } catch (e) {
            next(e);
        }
    }
};
