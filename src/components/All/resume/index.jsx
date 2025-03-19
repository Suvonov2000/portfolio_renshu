const Resume = () => {
  return (
    <div className="w-[50%] h-[150vh] m-auto ">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-[30px]">
          <b className="text-[40px]">Resume</b>
          <b className="text-[30px]">Work Experience</b>
        </div>
        <hr className="mt-5" />
        <div className="flex items-center justify-between mt-7 mb-7">
          <b className="text-[30px] text-blue-500">Aema</b>
          <h1 className="text-[20px] text-base ">Jan,2023-Present</h1>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="flex items-center justify-between mt-7 mb-7">
            <b className="text-[30px]">Full-Stack Engineer, Brands UP</b>
            <h1 className="text-[20px] text-base ">Oct,2022-Dec,2022</h1>
          </div>
          <div className="flex gap-[10px] p-4">
            <div className="w-[8px] h-[8px] rounded-[50px]  bg-black"></div>
            <p className="text-[20px] text-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              illum inventore est in reiciendis accusantium aut numquam fugiat
              enim ullam! At dolorem laborum cupiditate architecto, voluptatem
              tempora modi libero maxime sunt voluptates quibusdam repellendus
              consectetur excepturi aperiam illo similique earum!
            </p>
          </div>
          <div className="flex gap-[10px] p-4">
            <div className="w-[8px] h-[8px] rounded-[50px]  bg-black"></div>
            <p className="text-[20px] text-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              illum inventore est in reiciendis accusantium aut numquam fugiat
            </p>
          </div>
          <div className="flex gap-[10px] p-4">
            <div className="w-[8px] h-[8px] rounded-[50px]  bg-black"></div>
            <p className="text-[20px] text-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              illum inventore est in reiciendis accusantium aut numquam fugiat
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Resume;
