"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Ruler,
  Heart,
  Share2,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Clock,
  Zap,
} from "lucide-react";
const properties = [
  {
    id: 1,
    title: "Vista Panorámica al Océano Pacífico",
    location: "Playa Flamingo, Guanacaste",
    price: "$450,000",
    size: "8,500 m²",
    description:
      "Impresionante terreno con vista panorámica de 180° al océano Pacífico. Ubicado en una colina exclusiva con acceso privado y seguridad 24/7.",
    features: [
      "Vista al mar",
      "Acceso privado",
      "Electricidad y agua",
      "Título limpio",
    ],
    amenities: [
      "Playa a 5 min",
      "Seguridad 24/7",
      "Topografía ideal",
      "Vegetación nativa",
    ],
    tags: ["Premium", "Inversión"],
    highlights:
      "Oportunidad única con potencial de valorización del 30% en 2 años",
    roi: "30% en 2 años",
    views: 243,
    lastUpdated: "Hace 2 días",
    status: "Disponible",
    image: "/aerea1.png",
    images: ["/aerea1.png", "/cruz.jpg", "/aerea1.png"],
  },
  {
    id: 2,
    title: "Terreno para Desarrollo Residencial",
    location: "Santa Ana, San José",
    price: "$380,000",
    size: "5,200 m²",
    description:
      "Excelente oportunidad de inversión en la zona de mayor plusvalía de Santa Ana. Terreno plano con todos los servicios, ideal para desarrollo de condominios.",
    features: [
      "Terreno plano",
      "Todos los servicios",
      "Uso mixto",
      "Título limpio",
    ],
    amenities: [
      "Centros comerciales",
      "Escuelas internacionales",
      "Hospitales",
      "Fácil acceso",
    ],
    tags: ["Desarrollo", "Inversión"],
    highlights:
      "Permisos de construcción aprobados para proyecto residencial de 12 unidades",
    roi: "25% en 3 años",
    views: 187,
    lastUpdated: "Hace 5 días",
    status: "Disponible",
    image: "/aerea1.png",
    images: ["/cruz.jpg", "/aerea1.png", "/cruz.jpg"],
  },
  {
    id: 3,
    title: "Finca con Naciente de Agua Propia",
    location: "San Ramón, Alajuela",
    price: "$295,000",
    size: "12,000 m²",
    description:
      "Hermosa finca con naciente de agua propia y cascada natural. Terreno con topografía variada, áreas planas para construcción y bosque primario.",
    features: [
      "Naciente propia",
      "Bosque primario",
      "Cascada natural",
      "Clima templado",
    ],
    amenities: [
      "Privacidad total",
      "Fauna silvestre",
      "Senderos naturales",
      "Aire puro",
    ],
    tags: ["Ecológico", "Exclusivo"],
    highlights:
      "Única propiedad disponible en la zona con naciente de agua certificada",
    roi: "Valor estable con apreciación natural",
    views: 156,
    lastUpdated: "Hace 1 semana",
    status: "Última disponible",
    image: "/aerea1.png",
    images: ["/rio.png", "/cruz.jpg", "/aerea1.png"],
  },
];

export default function Properties() {
  const [favoriteProperties, setFavoriteProperties] = useState<number[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<
    Record<number, number>
  >({});

  const toggleFavorite = (id: number) => {
    if (favoriteProperties.includes(id)) {
      setFavoriteProperties(
        favoriteProperties.filter((propId) => propId !== id)
      );
    } else {
      setFavoriteProperties([...favoriteProperties, id]);
    }
  };

  const nextImage = (propertyId: number, imagesLength: number) => {
    setActiveImageIndex((prev) => {
      const currentIndex = prev[propertyId] ?? 0;
      const nextIndex = (currentIndex + 1) % imagesLength;
      return { ...prev, [propertyId]: nextIndex };
    });
  };

  const prevImage = (propertyId: number, imagesLength: number) => {
    setActiveImageIndex((prev) => {
      const currentIndex = prev[propertyId] ?? 0;
      const prevIndex = (currentIndex - 1 + imagesLength) % imagesLength;
      return { ...prev, [propertyId]: prevIndex };
    });
  };

  return (
    <section
      id="properties"
      className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-3">
              Propiedades Exclusivas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Terrenos Premium en Costa Rica
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Selección de propiedades con ubicaciones estratégicas, vistas
              impresionantes y alto potencial de valorización.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3 w-full md:w-auto">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="beach">Playa</TabsTrigger>
                <TabsTrigger value="mountain">Montaña</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {properties.map((property) => {
            const currentImageIndex = activeImageIndex[property.id] ?? 0;

            return (
              <Card
                key={property.id}
                className="overflow-hidden border-0 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white"
              >
                <div className="relative">
                  {/* Carrusel de imágenes */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={
                        property.images?.[currentImageIndex] ?? "/aereas1.png"
                      }
                      alt={`${property.title} - Imagen ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Controles de carrusel */}
                    <button
                      onClick={() =>
                        prevImage(property.id, property.images.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        nextImage(property.id, property.images.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Indicadores de imagen */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {property.images.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 rounded-full transition-all ${
                            currentImageIndex === index
                              ? "w-6 bg-white"
                              : "w-1.5 bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Badges y botones superiores */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
                    <div className="flex flex-col gap-2">
                      <Badge className="bg-green-600 text-white hover:bg-green-700 text-sm px-3 py-1">
                        {property.price}
                      </Badge>
                      {property.status === "Última disponible" && (
                        <Badge className="bg-amber-500 text-white hover:bg-amber-600 text-sm px-3 py-1">
                          Última disponible
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(property.id);
                        }}
                        className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favoriteProperties.includes(property.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-700"
                          }`}
                        />
                      </button>
                      <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                        <Share2 className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Tags inferiores */}
                  <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                    {property.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-white/90 text-gray-800 border-0 font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardContent className="pt-6">
                  {/* Ubicación */}
                  <div className="flex items-center gap-1 text-sm text-green-600 font-medium mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {property.title}
                  </h3>

                  {/* Destacado */}
                  <div className="bg-amber-50 border-l-4 border-amber-500 pl-3 py-2 mb-4">
                    <p className="text-amber-800 text-sm font-medium flex items-start">
                      <Zap className="h-4 w-4 mr-1.5 mt-0.5 flex-shrink-0" />
                      <span>{property.highlights}</span>
                    </p>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  {/* Características principales */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-md">
                        <Ruler className="h-4 w-4 text-green-700" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tamaño</p>
                        <p className="text-sm font-medium">{property.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-md">
                        <Zap className="h-4 w-4 text-green-700" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">ROI Estimado</p>
                        <p className="text-sm font-medium">{property.roi}</p>
                      </div>
                    </div>
                  </div>

                  {/* Características destacadas */}
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center">
                      <Check className="h-4 w-4 mr-1.5 text-green-600" />
                      Características destacadas:
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {property.features.slice(0, 4).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-1.5 text-sm text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Estadísticas */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      <span>{property.views} visitas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Actualizado {property.lastUpdated}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:gap-2 transition-all">
                    Ver detalles{" "}
                    <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Descubra nuestra colección completa de terrenos premium en Costa
            Rica
          </p>
          <a
            href="/propiedades"
            className="inline-flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-50 rounded-lg text-lg px-6 py-3 transition-all duration-500 group"
          >
            Ver todas las propiedades
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
