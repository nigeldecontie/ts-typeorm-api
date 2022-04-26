// import mongoose from 'mongoose';

export interface IUser {
  _id: string;
  name: string;
  channel: string;
  createdAt: Date;
}

// export const UsersModel = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   channel: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
// });

// export type User = typeof UsersModel;
