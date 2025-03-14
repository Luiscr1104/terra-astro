"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Nos comunicaremos contigo pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-5">Contáctenos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder a todas sus preguntas y ayudarle a
            encontrar la propiedad perfecta.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Envíenos un mensaje</CardTitle>
              <CardDescription>
                Complete el formulario y nos pondremos en contacto con usted lo
                antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Nombre completo"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3"
                />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3"
                />
                <Input
                  placeholder="Teléfono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3"
                />
                <Textarea
                  placeholder="¿En qué podemos ayudarle?"
                  className="min-h-[120px] p-3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 py-3"
                >
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-5">
                Información de contacto
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+506 2222-3333</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Correo electrónico</p>
                    <p className="text-gray-600">info@terrarealestatecr.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">San José, Costa Rica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Horario de atención</p>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-5">
                ¿Busca una propiedad específica?
              </h3>
              <p className="text-gray-600 mb-5">
                Si tiene requisitos específicos para su terreno ideal, nuestro
                equipo puede ayudarle a encontrar exactamente lo que está
                buscando.
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 py-3 px-6"
              >
                Solicitar búsqueda personalizada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
