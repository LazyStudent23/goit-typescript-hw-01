import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// interface ToDo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// fetchData<ToDo>("https://jsonplaceholder.typicode.com/todos/1").then(data => {
//     console.log(data.completed);
// });

// fetchData<PostsResponse>("https://dummyjson.com/posts").then((data) => {
//     console.log(data.posts.map(post => {
//         console.log(post.title);
//     })
//     )
// });

// interface PostsResponse {
//   posts: Post[];
//   total: number;
//   skip: number;
//   limit: number;
// }
// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   tags: string[];
//   reactions: Reactions;
//   views: number;
//   userId: number;
// }
// interface Reactions {
//   likes: number;
//   dislikes: number;
// }