'use client'

import { useState, useEffect } from 'react';
import { dataModel } from '../models/data.model';

export default function Ticket() {

  const [ticketData, setTicketData] = useState<dataModel>();

  useEffect(() => {
    const storedData = sessionStorage.getItem('data');
    if (storedData) {
      setTicketData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className='min-h-[85vh] grid place-content-center'>
    <section className="rounded-lg border w-full max-w-md bg-white text-gray-800 shadow-lg">
      <header className="flex flex-col space-y-1.5 p-6 text-center border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold">Aventira Motors</h1>
        <p className="text-lg">Los premios son increibles</p>
      </header>
      <main className="p-6 space-y-4 py-6">
        <div className="text-center">
          <p className="text-xl font-semibold">Numero de ticket</p>
          <p className="text-4xl font-bold">{ticketData?.id}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Nombres</p>
          <p className="text-xl font-semibold">{ticketData?.name + " " +ticketData?.lastname}</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Correo electronico</p>
          <p className="text-xl font-semibold">{ticketData?.email}</p>
        </div>
      </main>
        <div className="p-6 flex flex-col items-center border-t border-gray-200 pt-4">
        <p className="text-center mb-2">
          Gracias por participar, buena suerte
        </p>
      </div>
    </section>
    </div>
  )
}
