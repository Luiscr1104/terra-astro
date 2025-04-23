import { useState } from "react";
import { MapPin, Shield, Leaf, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 0,
    title: "Ubicaciones Estratégicas",
    description:
      "Terrenos en zonas de alto desarrollo, cerca de ciudades y accesos principales.",
    icon: <MapPin className="w-5 h-5 text-white" />,
    color: "bg-blue-600",
    image: "/aerea1.png",
    benefits: [
      "Cercanía a centros urbanos",
      "Acceso a rutas nacionales",
      "Zonas de alta demanda",
      "Alto potencial de plusvalía",
    ],
  },
  {
    id: 1,
    title: "Seguridad Jurídica",
    description:
      "Propiedades con títulos verificados, estudios registrales y planos actualizados.",
    icon: <Shield className="w-5 h-5 text-white" />,
    color: "bg-yellow-500",
    image: "/aerea1.png",
    benefits: [
      "Títulos en regla",
      "Estudios registrales",
      "Planos catastrados",
      "Asesoría legal incluida",
    ],
  },
  {
    id: 2,
    title: "Sostenibilidad",
    description:
      "Proyectos en armonía con la naturaleza y respeto por el entorno ecológico.",
    icon: <Leaf className="w-5 h-5 text-white" />,
    color: "bg-green-600",
    image: "/aerea1.png",
    benefits: [
      "Respeto ambiental",
      "Preservación de flora y fauna",
      "Construcción responsable",
      "Terrenos con belleza natural",
    ],
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          ¿Por qué elegir TerraRealEstateCR?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Invertí con confianza en terrenos que ofrecen ubicación, respaldo
          legal y respeto ambiental.
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {features.map((feature, i) => (
            <button
              key={feature.id}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition",
                active === i
                  ? `${feature.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <span className="p-1 rounded-full bg-white/20">
                {feature.icon}
              </span>
              {feature.title}
            </button>
          ))}
        </div>

        {/* Feature Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-bold text-green-700">
              {features[active].title}
            </h3>
            <p className="text-gray-700 mb-4">{features[active].description}</p>
            <ul className="space-y-2">
              {features[active].benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="text-green-600 w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 bg-green-600 hover:bg-green-700">
              Conocer más
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
            <img
              src={features[active].image}
              alt={features[active].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
