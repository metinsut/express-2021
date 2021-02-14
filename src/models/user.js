import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email is required',
        },
        name: {
            type: String,
            trim: true,
            unique: true,
            minlength: 4,
            maxlength: 20
        },
        password: {
            type: String,
            trim: true,
            minlength: 4,
            maxlength: 20,
            required: 'Password is required',
        },
        avatar: {
            type: String,
            required: 'Avatar image is required',
            default: '/static/images/profile-image.jpg',
        },
        about: {
            type: String,
            trim: true,
        },
        role: {
            role_id: {
                type: Number,
                minlength: 1,
                maxlength: 5,
                default: 1,
            },
            role_name: {
                type: String,
                default: 'user',
            },
        },
        isActive: {
            type: Boolean,
            default: false,
            required: true,
        },
        following: [{ type: Schema.Types.ObjectId, ref: 'user' }],
        followers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
        token: {
            type: String,
            trim: true
        }
    },
    { timestamps: true },
);

const User = model('user', userSchema);
export default User;
