import mongoose from "mongoose";
import { Password } from "../services/password";

interface UserArgs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(args: UserArgs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
  toJSON:{
    versionKey:false,
    transform(doc,ret){
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
    }
  }
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashedPassword = await Password.toHash(this.get("password"));
    this.set("password", hashedPassword);
  }
  done();
});

userSchema.statics.build = (args: UserArgs) => {
  return new User(args);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
