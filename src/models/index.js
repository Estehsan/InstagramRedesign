// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, User, Post, Likes } = initSchema(schema);

export {
  Comment,
  User,
  Post,
  Likes
};