const Navbar = () => {
  return (
    <nav className="grid grid-cols-12 h-20">
        <div className="col-span-1"></div>
        <div className="col-span-10">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold ml-4">Roxana Espinoza</h1>
                </div>
                <div className="flex items-center gap-3 mx-4">
                    <a href="/projects" className="text-xl font-bold text-purple-300 hover:text-purple-500 transition-all">Proyectos</a>
                    <a href="/about" className="text-xl font-bold text-purple-300 hover:text-purple-500 ml-4 transition-all">Acerca de</a>
                    <a href="/contact" className="text-xl font-bold text-purple-300 hover:text-purple-500 ml-4 transition-all">Contacto</a>
                </div>
            </div>
        </div>
        <div className="col-span-1"></div>
    </nav>);
};

export default Navbar;
