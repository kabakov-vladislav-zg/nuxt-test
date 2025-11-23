import { defineStore } from 'pinia'
import {
  PostsApi,
  type Post
} from '../index'

interface State {
  postsList: Post[],
  post: Post | null,
}

export const usePostsStore = defineStore('postsStore', {
  state: (): State => ({
    postsList: [],
    post: null,
  }),
  actions: {
    async fetchPosts() {
      this.postsList = await PostsApi.fetchPosts();
      return true;
    },

    async fetchPostById(id: number) {
      const fromPostsList = this.postsList.find(post => Number(post.id) === id);
      if (fromPostsList) {
        this.post = fromPostsList;
      } else {
        this.post = null;
        this.post = await PostsApi.fetchPostById(id);
      }
      return true;
    },
  },
})