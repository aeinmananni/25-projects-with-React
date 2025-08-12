import { Header, Main, Footer, Sidebar } from './components';

export default function Shop() {
  return (
    <div className="flex w-full h-full border-2 border-red-500">
      <div className="w-full h-full flex flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}
