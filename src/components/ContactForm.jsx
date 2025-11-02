import { useState, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import SelectField from "./SelectField";

const ContactForm = ({ fullWidthButton = false , ctaText = "Vraag jouw offerte aan"}) => {
  const [form, setForm] = useState({
    typeRenovatie: "",
    budgetIndicatie: "",
    gewensteStartdatum: "",
    name: "",
    email: "",
    phone: "",
    extraInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null)
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setError(null);
        setIsSubmitted(true);
        setForm({
          typeRenovatie: "",
          budgetIndicatie: "",
          gewensteStartdatum: "",
          name: "",
          email: "",
          phone: "",
          extraInfo: "",
        });
      } else {
        setError(data.error || "Failed to submit form. Please try again.");
      }
    } catch (e) {
      console.error(e);
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="neue-montreal-text flex flex-col gap-9 lg:gap-12 max-w-[570px] w-full mx-auto">
      <div>
        <SelectField
          placeholder={"Type renovatie"}
          options={[
            "Totaal renovatie",
            "Deel renovatie",
            "Dakwerken",
            "Gevelwerken",
            "Ramen en deuren",
            "Zonnepanelen en thuisbatterij",
            "Warmtepompen",
            "Laadpaal",
            "Interieur",
            "Badkamer",
            "Keuken",
          ]}
          name={"typeRenovatie"}
          value={form.typeRenovatie}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-6 lg:gap-8">
        <SelectField
          placeholder={"Budget indicatie"}
          options={[
            "€100.000",
            "Tussen €100.000 - 150.000",
            "Tussen €150.000 - 200.000",
            "Tussen €200.000 - 300.000",
            "Weet ik nog niet",
          ]}
          name={"budgetIndicatie"}
          value={form.budgetIndicatie}
          onChange={handleChange}
        />
        <SelectField
          placeholder={"Gewenste startdatum"}
          options={[
            "Zo snel mogelijk", 
            "3 tot 6 maanden",
            "> 1 jaar",
            "Weet ik nog niet",
          ]}
          name={"gewensteStartdatum"}
          value={form.gewensteStartdatum}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Naam"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Telefoon"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Extra informatie"
          id="extraInfo"
          name="extraInfo"
          value={form.extraInfo}
          onChange={handleChange}
        />
      </div>

      <div className="mt-12">
        {isSubmitted && (
          <div className="mb-4 text-sm text-green-500">
            Form submitted successfully
          </div>
        )}
        {error && (
          <div className="mb-4 text-sm text-red-500">
            {error}
          </div>
        )}
        <ArrowButton
          text={isSubmitting ? "Submitting..." : ctaText}
          width={fullWidthButton ? "100%" : "auto"}
          onclick={handleFormSubmit}
        />
      </div>
    </form>
  );
};

export default ContactForm;
