import { ofetch } from "ofetch";
import { PostSchema } from "./validator"
import * as z from "zod"; 

const baseURL  = 'http://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/'

export const fetchPosts = async () => {
  const res = await ofetch('/posts', { baseURL });
  return z.array(PostSchema).parse(res);
}

export const fetchPostById = async (id: string) => {
  const res = await ofetch(`/posts/${id}`, { baseURL });
  return PostSchema.parse(res);
}