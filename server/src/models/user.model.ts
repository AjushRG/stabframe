// import node modules
import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

// User Input Interface
export interface IUserInput {
  name: string;
  email: string;
  password: string;
}

// User Interface
export interface IUser extends IUserInput, Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// User Schema
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.userId = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

// Hash Password
UserSchema.pre("save", function (next) {
  const user = this as IUser;
  if (!user.isModified("password")) return next();

  const salt = bcrypt.genSaltSync(config.get("SALT_ROUDNS") as number);
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next();
});

// Compare Password
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as IUser;
  return bcrypt.compare(candidatePassword, user.password).catch((err: any) => {
    throw new Error(err);
  });
};

// User Model
const UserModel = model<IUser>("User", UserSchema);

// Export User Model
export default UserModel;
