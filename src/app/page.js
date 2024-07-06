import Logo from "@/components/img/WATCHME.png";

import ImgHome from "@/components/img/clockmw.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-cover h-max ">


      <nav className="w-full h-20 flex justify-center items-center gap-72 fixed">
        <div>
          <Image src={Logo} className=" w-40 h-auto"></Image>
        </div>
        <div className="flex gap-14 items-center font-Poppins font-medium">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">About</a>
        </div>
        <div className="w-max h-max"><button className="order flex relative justify-center font-Bebas px-5 bg-[#f3f3f3] rounded-full"><a>ORDER NOW</a></button></div>
      </nav>

      <section className="Homee bg-hero flex  items-center h-[100vh] bg-cover bg-no-repeat ">
      
        <article className="w-1/2 h-full flex justify-center items-center bg-[#d9d9d927]">
          <div className=" w-3/4 ">
            <h1 className=" font-semibold mb-4 font-Poppins text-xl">Don’t waste time, because</h1>
            <div className="bg-black w-max h-max mb-4 flex justify-center items-center"><h1 className="titleHome px-4 pt-2 pb-4 text-transparent text-6xl font-semibold font-Poppins">Time is Money</h1></div>
            
            <h1 className=" font-Montserrat font-semibold">
              Get this elegant watch, it will not only enhance your style, but
              also help you manage your time efficiently, ensuring you stay
              productive and on time throughout the day.
            </h1>
            <div className=" w-full h-max mt-10 flex justify-start gap-10 font-semibold">
          <span className=" w-32 h-12 justify-center items-center flex bg-[#B9C57F] font-Montserrat"><a href="#">Sign up</a></span>
          <span className=" w-32 h-12 justify-center items-center flex border border-black font-Montserrat"><a href="#">login</a></span>
        </div>
          </div>
        </article>
        <div className="flex justify-center w-1/2 h-full items-center bg-[#d9d9d927]">
          <Image src={ImgHome} className=" w-3/5 h-max mr-20"></Image>
        </div>

      </section>
    </main>
  );
}
