import { Layout, Header, AddTodo, Tasks } from "./components";

export default function TodoList() {
  return (
    <div className="w-full h-full p-2 flex justify-center">
      <Layout>
        <Header />
        <AddTodo />
        <Tasks />
      </Layout>
    </div>
  );
}
