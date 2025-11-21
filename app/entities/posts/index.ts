import PostsItem from "./ui/PostItem.vue";


export * as PostsApi from './api';
export { PostSchema, type Post } from './api/validator';
export { usePostsStore } from './model';
export { PostsItem }