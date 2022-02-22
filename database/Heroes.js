const {Schema, model} = require('mongoose');

const heroSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        trim: true
    },
    real_name: {
        type: String,
        required: true,
        trim: true
    },
    origin_description: {
        type: String,
        required: true,
        trim: true
    },
    superpowers: {
        type: String,
        required: true,
        trim: true
    },
    catch_phrase: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },


}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

heroSchema.statics = {
    createHero(heroObject) {
        return this.create({...heroObject});
    },

};


module.exports = model('hero', heroSchema);
