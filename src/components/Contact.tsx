import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = "service_vzlhwc2";
const EMAILJS_TEMPLATE_ID_USER = "template_lyf12v8";
const EMAILJS_TEMPLATE_ID_OWNER = "template_qci1sn3";
const EMAILJS_PUBLIC_KEY = "Q0DvMNcn6eYsLL43h";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "-",
      message: formData.message,
      to_name: "Belaôs Beauty Salon",
      user_email: formData.email,
      owner_email: "info@belaosbeauty.com",
    };

    try {
      // Email de confirmación al usuario
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_USER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Email de aviso para el propietario
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_OWNER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "¡Mensaje enviado!",
        description:
          "Te hemos enviado un email de confirmación y nos pondremos en contacto contigo pronto.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error enviando el formulario de contacto", error);
      toast({
        title: "Error",
        description:
          "Hubo un problema al enviar el mensaje. Inténtalo de nuevo en unos minutos.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Dirección",
      content: "Carrer de Ramiro de Maeztu, 9, Camins al Grau, 46022 València, Valencia",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Teléfono",
      content: "699 13 31 05",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@belaosbeauty.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horario",
      content: "Lun: Cerrado | Mar-Vie: 9:30–19:30 | Sáb: 9:30–13:30 | Dom: Cerrado",
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para atenderte. Reserva tu cita o contáctanos para más información
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="border-none shadow-md transition-smooth hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden h-64 bg-muted group">
              <iframe
                src="https://www.google.com/maps?q=Carrer%20de%20Ramiro%20de%20Maeztu%2C%209%2C%2046022%20Val%C3%A8ncia%2C%20Valencia&hl=es&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación del salón"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-lg transition-smooth hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
