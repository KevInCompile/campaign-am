"use client";

import { departaments } from "./libs/departaments";
import useForm from "./hooks/useForm";

export default function Form() {
  const {
    handleSubmit,
    errors,
    handleInputChange,
    formData,
    validate,
    filteredCities,
  } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-2xl font-medium mb-6">Obten tu ticket</div>
        {/* Inserción de data*/}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label>Nombres</label>
            <input
              type="text"
              name="name"
              onChange={(e) => validate(e.target.value, "name")}
            />
            {errors.name && <small className="text-red-500">{errors.name}</small>}
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => validate(e.target.value, "lastname")}
            />
            {errors.lastname && (
              <small className="text-red-500">{errors.lastname}</small>
            )}
          </div>
          <div>
            <label>Cédula</label>
            <input type="number" name="doc" onChange={handleInputChange} />
          </div>
          <div>
            <label>Departamento</label>
            <select
              name="department"
              defaultValue="0"
              onChange={handleInputChange}
            >
              <option value="0">Seleccione un departamento</option>
              {departaments.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Ciudad</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              disabled={
                formData.department === "" || formData.department === "0"
              }
            >
              <option value="">Seleccione una ciudad</option>
              {filteredCities.map((item, index) => (
                <option key={index} value={item.city}>
                  {item.city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Celular</label>
            <input type="number" name="phone" onChange={(e) => validate(e.target.value, "phone")} />
            {errors.phone && <small className="text-red-500">{errors.phone}</small>}
          </div>
          <div>
            <label>Correo electronico</label>
            <input
              type="email"
              name="email"
              onChange={(e) => validate(e.target.value, "email")}
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              name="habeasData"
              className="flex-1"
              onChange={handleInputChange}
            />
            <small>
              Autorizo el tratamiento de mis datos de acuerdo con la finalidad
              establecida en la política de protección de datos personales.
            </small>
          </div>
        </div>
        <button
          type="submit"
          className="bg-black rounded-full p-3 px-6 text-white mt-6 hover:scale-105 transition"
        >
          PARTICIPAR
        </button>
      </form>
    </>
  );
}
