import mongoose from "mongoose";


const UserSchema = mongoose.Schema({

   username: { type: String, required: true, trim: true },
   email: { type: String, required: true, unique: true, trim: true },
   password: { type: String, required: true, trim: true },
   userType: {
      type: String, required: true, trim: true, default: "user",
      emun: ['user', 'admin',]
   },
   // password_confirmation:{type:String,required:true}
})

let UserModel = mongoose.model('userRegiterDetail', UserSchema)


export default UserModel