import { ArrowRightOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div className=" flex flex-col gap-[20px] w-[50%] m-auto">
      <b className="text-[40px]">Dashboard</b>
      <div className="flex gap-[20px]">
        <div className="w-[410px] h-[200px] border border-solid rounded-[10px] pt-[50px] pl-[60px]">
          <div className="flex gap-2">
            <h1 className="text-[20px] text-semibold hover:underline">
              {" "}
              Git Followers{" "}
            </h1>
            <ArrowRightOutlined />
          </div>
          <h1 className="text-[60px]">28</h1>
        </div>
        <div className="w-[410px] h-[200px] border border-solid rounded-[10px] pt-[50px] pl-[60px]">
          <div className="flex gap-2">
            <h1 className="text-[20px] text-semibold hover:underline">
              {" "}
              Telegram Subcribers{" "}
            </h1>
            <ArrowRightOutlined />
          </div>
          <h1 className="text-[60px]">38</h1>
        </div>
      </div>
      <div>
        <div className="w-[410px] h-[200px] border border-solid rounded-[10px] pt-[50px] pl-[60px]">
          <div className="flex gap-2">
            <h1 className="text-[20px] text-semibold hover:underline">
              {" "}
              All time views{" "}
            </h1>
            <ArrowRightOutlined />
          </div>
          <b className="text-[60px]">--</b>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
