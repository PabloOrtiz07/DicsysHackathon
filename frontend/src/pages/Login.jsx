import { useRef} from 'react'
import backgroundImage from '../images/background_dicsys.png';

export const Login=() =>{
    let user = useRef()
    let password = useRef()
    async function handleSubmit(event) {
        event.preventDefault();    
        console.log('consolellog')
    }
        return (
            <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="min-h-screen  
            bg-cover bg-no-repeat bg-center"
        >
            <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-12 mb-14 lg:px-96">
                <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col items-center p-5 justify-center">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                        <img
                            className="mx-auto h-40 -my-10 w-auto"
                            src="data:image/jpeg;base64,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"
                            alt="Your Company"
                        />
                        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Ingresa a tu cuenta
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="text-left">
                                <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre de Usuario
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user"
                                        name="user"
                                        type="text"
                                        autoComplete="user"
                                        required
                                        ref={user}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between text-left">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Contraseña
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        ref={password}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Inicia Sesion
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            No tenes cuenta?{' '}
                            <a href="https://dicsys.com/#contact" target="_blank" rel="noopener noreferrer" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Contactate con nosotros
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}