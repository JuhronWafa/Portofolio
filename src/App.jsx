import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Giri Lusi Jalmo Tan Keno Kiniro.⭐</q>
          </div>
          <div className="lg:w-fit">
            <h1 className="text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight font-bold mb-6 xl:whitespace-nowrap">
              Hi, Saya Mukhamad Juhron Wafa'
            </h1>
            <p className="text-base/loose mb-6 opacity-50">
              Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
              terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
              serta Banner. Saya senang mempelajari hal-hal baru, mengeksplorasi
              ide kreatif, serta mengembangkan keterampilan untuk menghasilkan
              karya yang fungsional dan menarik secara visual.
            </p>
          </div>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-500"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="md:w-80 xl:w-107.5 md:ml-auto"
        />
      </div>
    </>
  );
}

export default App;
