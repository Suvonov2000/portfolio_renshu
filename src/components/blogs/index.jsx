import { Input } from "antd";
const { Search } = Input;
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="w-[50%] h-[100vh] m-auto">
      <b className="text-[40px]">Blog</b>
      <p className="text-[20px] mt-[50px] text-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
        repellat cupiditate? Suscipit vero excepturi blanditiis maiores nostrum
        necessitatibus illo nisi eum enim, ea sequi officiis culpa voluptate
        cumque placeat omnis veniam repellat optio pariatur, quisquam, quos
        adipisci atque perferendis.
      </p>
      <Search
        className="mt-[30px]"
        style={{
          height: 100,
        }}
        placeholder="input search text"
        enterButton
      />
      <Link to={"/blogs/1"} className="w-full">
        <div className="flex flex-col gap-[10px] relative">
          <b className="text-[30px]">My Story</b>
          <p className="text-[20px] text-semibold">
            How I became Software Engineer
          </p>
          <p className="absolute right-0 top-1 text-[20px]">1Nov,2023</p>
        </div>
      </Link>
    </div>
  );
};

export default Blogs;
