export const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">

            {/* Barra de navegación superior */}
            <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center"> {/* Mostrado en todos los dispositivos */}
                        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2" />
                        <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
                    </div>
                    <div className="md:hidden flex items-center"> {/* Se muestra solo en dispositivos pequeños */}
                        <button id="menuBtn">
                            <i className="fas fa-bars text-gray-500 text-lg"></i> {/* Ícono de menú */}
                        </button>
                    </div>
                </div>

                {/* Ícono de Notificación y Perfil */}
                <div className="space-x-5">
                    <button>
                        <i className="fas fa-bell text-gray-500 text-lg"></i>
                    </button>
                    {/* Botón de Perfil */}
                    <button>
                        <i className="fas fa-user text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="flex-1 flex flex-wrap">
                {/* Barra lateral de navegación (oculta en dispositivos pequeños) */}
                <div className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
                    <nav>
                        <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                            <i className="fas fa-home mr-2"></i>Inicio
                        </a>
                        {/* More nav items */}
                    </nav>

                    {/* Rest of the navigation content */}
                </div>

                {/* Rest of your HTML content */}
            </div>
        </div>

    )
}