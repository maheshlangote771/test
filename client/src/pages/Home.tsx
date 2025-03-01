import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren, scaleUp } from "@/lib/animations";
import { Link } from "wouter";
import { ArrowRight, Code, Database, LineChart, Smartphone, Brain, Bot, Sparkles, CheckCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";
import QuickContactForm from "@/components/forms/QuickContactForm";
import { FaReact, FaAws, FaGoogle, FaPython, FaBrain, FaRobot } from "react-icons/fa";

export default function Home() {
  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Transform Your Business with Modern IT Solutions
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 mb-8"
            >
              MusterDekho provides cutting-edge software development services and innovative School ERP solutions to help your organization thrive in the digital age.
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4">
              <Link href="/services">
                <Button size="lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/school-erp">
                <Button variant="outline" size="lg">
                  School ERP Solution
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We offer a comprehensive suite of IT services to help businesses grow and succeed in the digital world.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Custom web applications built with modern technologies"
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications"
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "School ERP",
                description: "Comprehensive school management solution"
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "Data Analytics",
                description: "Turn your data into actionable insights"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI/ML Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Powered by AI & Machine Learning
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
              Leverage the power of artificial intelligence and machine learning to transform your business operations.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Predictive Analytics",
                description: "Make data-driven decisions with advanced predictive models"
              },
              {
                icon: <Bot className="h-8 w-8" />,
                title: "Process Automation",
                description: "Automate repetitive tasks with intelligent algorithms"
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Smart Insights",
                description: "Get intelligent insights from your business data"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Our Technology Stack
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to deliver robust and scalable solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {[
              { icon: <FaReact className="h-12 w-12" />, name: "React" },
              { icon: <FaAws className="h-12 w-12" />, name: "AWS" },
              { icon: <FaGoogle className="h-12 w-12" />, name: "Google Cloud" },
              { icon: <FaPython className="h-12 w-12" />, name: "Python" },
              { icon: <FaBrain className="h-12 w-12" />, name: "Neural Networks" },
              { icon: <FaRobot className="h-12 w-12" />, name: "AI & ML" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-gray-600 hover:text-primary transition-colors">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                Get in Touch
              </motion.h2>
              <motion.div variants={fadeIn}>
                <ul className="space-y-4">
                  {[
                    "24/7 Technical Support",
                    "Dedicated Project Manager",
                    "Free Initial Consultation",
                    "Custom Solution Design",
                    "Regular Progress Updates",
                    "Post-deployment Support"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <QuickContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}