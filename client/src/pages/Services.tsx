import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Code, Database, LineChart, Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Node.js, and cloud services. We create scalable and responsive solutions tailored to your needs.",
    image: "https://images.unsplash.com/photo-1486475554424-2fa50cd59f18"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We use Flutter and React Native to deliver high-performance mobile experiences.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "School ERP Solutions",
    description: "Comprehensive school management system that streamlines administrative tasks, enhances communication, and improves overall efficiency.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics solutions. We help you make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "SEO Services",
    description: "Improve your online visibility and attract more organic traffic with our proven SEO strategies and content optimization techniques.",
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Create beautiful and intuitive user interfaces that deliver exceptional user experiences. We focus on user-centered design principles.",
    image: "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4"
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
              Our Services
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              We offer a comprehensive suite of IT services to help businesses thrive in the digital age.
              From web development to data analytics, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="aspect-video rounded-lg overflow-hidden mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 mb-8">
              Contact us today to discuss how we can help you achieve your digital goals.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
