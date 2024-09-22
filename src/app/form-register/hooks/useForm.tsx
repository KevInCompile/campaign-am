"use client";

import { useState } from "react";
import { cities } from "../libs/cities";
import { citiesModel } from "../models/cities.model";
import { INITIAL_STATE } from "../utils/INITIAL_STATE";
import { EMAIL_REGEX, LETTERS_ONLY_REGEX, NUMBERS_ONLY_REGEX } from "../utils/regex"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useForm = () => {
  const [errors, setErrors] = useState({ name: "", lastname: "", email: "", doc: "", phone: "" });
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [filteredCities, setFilteredCities] = useState<Array<citiesModel>>([]);

  // Router
  const router = useRouter()

  const validate = (value: string, field: "name" | "lastname" | "email" | "doc" | "phone") => {
    let error = "";
    if (field === "email") {
      if (!EMAIL_REGEX.test(value) || !value.includes("@")) {
        error =
          "Email inválido. Debe contener solo letras, números, @ y puntos";
      }
    } else if (field === "name" || field === "lastname") {
      if (!LETTERS_ONLY_REGEX.test(value)) {
        error = "Solo se permiten letras";
      }
    } else if (field === "doc") {
      if (!NUMBERS_ONLY_REGEX.test(value)) {
        error = "Solo se permiten números";
      }
    } else if (field === "phone") {
      if (!NUMBERS_ONLY_REGEX.test(value) || value.length !== 10) {
        error = "El número de teléfono debe tener exactamente 10 dígitos";
      }
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    if (name === "department") {
      setFilteredCities(cities.filter((city) => city.department === value));
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some(error => error !== "");
    const isFormComplete = Object.values(formData).every(value => value !== "");

    if (hasErrors || !isFormComplete) return toast.error("Por favor, completa todos los campos correctamente antes de enviar");

    if (!formData.habeasData) return toast.warning("Acepta los terminos y condiciones");

    // Generate a random ID
    const randomID = Math.floor(10000 + Math.random() * 90000).toString();

    // Guardar data con el ID en el sessionStorage
    const dataToSave = { ...formData, id: randomID };
    sessionStorage.setItem('data', JSON.stringify(dataToSave));

    toast.success("Formulario enviado exitosamente");
    router.push('/ticket')
  };

  return {
    errors,
    formData,
    filteredCities,
    validate,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
