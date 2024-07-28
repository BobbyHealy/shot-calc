"use client"
import { useState } from 'react'

export default function Form() {
    const [perShotFuerte, setPerShotFuerte] = useState(1);
    const [perShotSuave, setPerShotSuave] = useState(1);

    return (
        <form className='m-2'>
            <div className="space-y-12 bg-white p-10 rounded">
                <h2 className="text-base font-semibold text-gray-900">Calculadora de shots</h2>
                <p className="text-sm leading-6 text-gray-600">
                    Porque piña es gay y asi no se queja.
                </p>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        % de botella fuerte
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            onChange={ e => { setPerShotFuerte(e.target.value)}}
                            placeholder="10"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        % de botella suave
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            onChange={ e => { setPerShotSuave(e.target.value)}}
                            placeholder="10"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <h2 className="text-base font-semibold text-gray-900 align-center text-center">{perShotFuerte === 0 ? "No se puede 0" : perShotSuave === 0 ? "No se puede 0" : `1 shot fuerte = ${perShotFuerte / perShotSuave} shots suaves`}</h2>

            </div>
        </form>
    )
}