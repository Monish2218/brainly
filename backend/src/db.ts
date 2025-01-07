import mongoose, {model, Schema} from "mongoose"

mongoose.connect("mongodb://localhost:27017/brainly")

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export const UserModel = model("User", UserSchema);

const contentTypes = ['image', 'video', 'article', 'audio'];
const ContentSchema = new Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true,
        validate: async function(value: mongoose.Types.ObjectId) {
            const user = await UserModel.findById(value);
            if (!user) {
              throw new Error('User does not exist');
            }
          }
     },
})

export const ContentModel = model("Content", ContentSchema);

const TagSchema = new Schema({
    title: {type: String, required: true, unique: true }
})

export const TagModel = model("Tag", TagSchema);

const linkSchema = new Schema({
    hash: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})
