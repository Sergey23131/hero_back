const {errors_massage, ErrorHandler, errors_code} = require('../errors');
const {DOCS_MIMETYPES, FILE_MAX_SIZE} = require('../configs/constants');
module.exports = {
    checkfile: (req, res, next) => {
        try {
            const {image} = req.files || {};

            const {size, mimetype} = image;

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
    }
};
