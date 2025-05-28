const Blog = () => {
  return (
    <div className="w-[50%] h-[230vh] m-auto ">
      <b className="text-[40px]">My Blog</b>
      <div className="flex items-center justify-between mt-7 mb-7">
        <b className="text-[20px]">Suvonov Umidjon / March, 2025</b>
        <h1 className="text-[20px] text-base ">Jun,2020-Sep,2022</h1>
      </div>
      <div>
        <p className="text-[20px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis
          cum corrupti sapiente, saepe obcaecati consequuntur optio. Aspernatur
          blanditiis corrupti natus animi est porro eos repellendus modi soluta
          voluptatibus quae doloremque reiciendis veritatis ut molestiae velit,
          voluptatem ipsum dignissimos. Facilis pariatur eos, doloremque,
          debitis qui ab nihil quas amet nulla tempora optio? Magnam illum, iure
        </p>
      </div>
      <div className="mt-8">
        <img src="https://stihi.ru/pics/2021/07/14/4877.jpg" alt="" />
      </div>
      <p className="text-[20px] font-semibold mt-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aspernatur
        rem dolores nostrum officiis voluptas laborum, facilis ex ipsum, optio
        expedita iste esse natus fugit. Eaque laudantium repellat fugit iusto
        ducimus unde placeat blanditiis nobis, dignissimos repudiandae
        repellendus non quod quidem sed odit. Id eaque enim sint, perferendis
        laboriosam quasi?rem dolores nostrum officiis voluptas laborum, facilis
        ex ipsum, optio expedita iste esse natus fugit. Eaque laudantium
        repellat fugit iusto ducimus unde placeat blanditiis nobis, dignissimos
        repudiandae repellendus non quod quidem sed odit. Id eaque enim sint,
        perferendis laboriosam quasi?rem dolores nostrum officiis voluptas
        laborum, facilis ex ipsum, optio expedita iste esse natus fugit. Eaque
        laudantium repellat fugit iusto ducimus unde placeat blanditiis nobis,
        dignissimos repudiandae repellendus non quod quidem sed odit. Id eaque
        enim sint, perferendis laboriosam quasi?
      </p>
      <div className="mt-8">
        <img
          src="https://i.ytimg.com/vi/HBDpZAPf_tI/maxresdefault.jpg"
          alt=""
        />
      </div>
      <div className="w-[800px] h-[120px] rounded-[4px] border border-solid mt-10 m-auto">
        <h1 className="text-[20px] font-semibold p-6">
          Subcribe to telegram Channel{" "}
          <a href="https://t.me/suvonov_umidjon" className="text-blue-500">
            @suvonov_umidjon
          </a>{" "}
          where i share my thoughts, articles, talks and more.
        </h1>
      </div>
    </div>
  );
};
export default Blog;
