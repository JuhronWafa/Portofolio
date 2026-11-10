const Navbar = () => {
  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>
      <ul className="menu flex items-center gap-10 fixed left-1/2 -top-10 -translate-x-1/2 opacity-0 lg:static lg:translate-x-0 lg:opacity-100">
        <li>
          <a href="#" className="text-lg font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
