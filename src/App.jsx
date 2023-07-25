import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

const App = () => {
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...posts]),
  });

  const mutationQuery = useMutation({
    mutationFn: (title) =>
      wait(1000).then(() => posts.push({ id: Math.random, title })),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  console.log(postQuery.data);

  if (postQuery.isLoading) return <h1>Loading....</h1>;

  if (postQuery.error)
    return <pre>Error.... {JSON.stringify(postQuery.error)}</pre>;

  return (
    <div>
      {postQuery.data.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
      <button disabled={mutationQuery.isLoading} onClick={() => mutationQuery.mutate("Post 3")}>
        Add New Post
      </button>
    </div>
  );
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
