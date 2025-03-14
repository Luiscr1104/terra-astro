import { useState } from "react";
import {
  MapPin,
  Shield,
  Leaf,
  DollarSign,
  Mountain,
  Building,
  Award,
  TrendingUp,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Función para manejar cambios con animación
  const changeFeature = (featureId: number) => {
    if (activeFeature === featureId) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFeature(featureId);
      setIsTransitioning(false);
    }, 300); // delay para permitir fade-out antes del cambio
  };

  const mainFeatures = [
    {
      id: 0,
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicaciones Estratégicas",
      description:
        "Terrenos ubicados en zonas de alto potencial de desarrollo y crecimiento.",
      color: "from-blue-500 to-blue-600",
      image:
        "/placeholder.svg?height=600&width=800&text=Ubicaciones+Estratégicas",
      benefits: [
        "Acceso a principales vías de comunicación",
        "Cercanía a centros urbanos y comerciales",
        "Zonas con alta demanda inmobiliaria",
        "Áreas con proyección de desarrollo",
      ],
    },
    {
      id: 1,
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad Jurídica",
      description:
        "Todas nuestras propiedades cuentan con documentación legal completa y verificada.",
      color: "from-amber-500 to-amber-600",
      image: "/placeholder.svg?height=600&width=800&text=Seguridad+Jurídica",
      benefits: [
        "Títulos de propiedad verificados",
        "Estudios registrales completos",
        "Planos catastrados actualizados",
        "Asesoría legal especializada incluida",
      ],
    },
    {
      id: 2,
      icon: <Leaf className="h-6 w-6" />,
      title: "Sostenibilidad",
      description:
        "Propiedades seleccionadas considerando el impacto ambiental y la conservación natural.",
      color: "from-green-500 to-green-600",
      image: "/placeholder.svg?height=600&width=800&text=Sostenibilidad",
      benefits: [
        "Respeto por ecosistemas naturales",
        "Desarrollo en armonía con el entorno",
        "Conservación de especies nativas",
        "Prácticas de construcción sostenible",
      ],
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir TerraRealEstateCR?
          </h2>
          <p className="text-lg text-gray-600">
            Nos especializamos en encontrar los mejores terrenos en Costa Rica,
            ofreciendo seguridad, calidad y oportunidades de inversión
            excepcionales.
          </p>
        </div>

        {/* Características principales con interacción */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14 md:mb-20">
          {/* Panel izquierdo - Selector de características */}
          <div className="flex flex-col space-y-6">
            {mainFeatures.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "relative p-6 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden group",
                  activeFeature === feature.id
                    ? "bg-white shadow-xl border-l-4 border-green-600"
                    : "bg-white/50 hover:bg-white hover:shadow-lg"
                )}
                onClick={() => changeFeature(feature.id)}
                role="button"
                tabIndex={0}
                aria-pressed={activeFeature === feature.id}
                aria-label={`Ver característica: ${feature.title}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "p-3 rounded-lg bg-gradient-to-br text-white transition-all",
                      feature.color
                    )}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>

                    {activeFeature === feature.id && (
                      <div className="mt-4 space-y-2 animate-fadeIn">
                        {feature.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {activeFeature === feature.id && (
                  <div className="absolute bottom-3 right-3">
                    <ArrowRight className="h-5 w-5 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Panel derecho - Visualización de la característica seleccionada */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {mainFeatures.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  activeFeature === feature.id
                    ? isTransitioning
                      ? "opacity-0 z-10"
                      : "opacity-100 z-10"
                    : "opacity-0 pointer-events-none"
                )}
              >
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{feature.description}</p>
                  <Button className="w-fit bg-green-600 hover:bg-green-700">
                    Conocer más
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-10 shadow-xl mx-auto max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para encontrar su terreno ideal?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está preparado para ayudarle a
              encontrar la propiedad perfecta que se ajuste a sus necesidades y
              objetivos de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                Ver propiedades
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="black border-white hover:bg-green-500"
              >
                Contactar un asesor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
