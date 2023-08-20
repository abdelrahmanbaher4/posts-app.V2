import { Navbar } from "../components";
import { LikesProvider } from "../providers";

const postsAppLayout = async ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <LikesProvider>{children}</LikesProvider>
    </div>
  );
};

export default postsAppLayout;
