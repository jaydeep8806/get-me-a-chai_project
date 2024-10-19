import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
        <div className="font-bold flex text-5xl justify-center items-center gap-2">
          Get Me A Chai
          <span>
            <img src="chai.gif" width={88} alt="" />
          </span>
        </div>

        <p>
          A place where your fans can buy you a chai. unleash the power of your
          fans nad get your projects funded
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Star Here
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-10 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14 ">
          Your Fans can buy a chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
              src="/yourself.gif"
              alt=""
            />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-center">
              Your Fans Are Available for you to help you{' '}
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
              src="/coin1.gif"
              alt=""
            />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-center">
              Your Fans Are Available for you to help you{' '}
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
              src="/crowd.gif"
              alt=""
            />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-center">
              Your Fans Are Available for you to help you{' '}
            </p>
          </div>
        </div>

        <div className="bg-white h-1 opacity-10"></div>

        <div className="text-white container mx-auto pb-3 text-3xl font-bold text-center pt-14 flex items-center flex-col">
          <h2 className=" text-3xl font-bold text-center mb-14">
            Learn more about us
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QtaorVNAwbI?si=aVN59ELZ2-tYAIQX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  )
}
