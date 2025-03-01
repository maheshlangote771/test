import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Award, Target, Users } from "lucide-react";

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client Focus",
    description: "Your success is our priority. We work closely with you to achieve your goals."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do."
  }
];

export default function About() {
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
              About MusterDekho
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              We are a leading IT services company dedicated to transforming businesses
              through innovative technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Our Team"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                Our Story
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 mb-4">
                Founded with a vision to revolutionize the education sector through technology,
                MusterDekho has grown into a comprehensive IT solutions provider serving
                clients across various industries.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-600">
                Our team of experienced professionals combines technical expertise with
                industry knowledge to deliver solutions that drive real business value.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver exceptional
              results for our clients.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership Team
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "CEO",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              },
              {
                name: "Jane Smith",
                position: "CTO",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              },
              {
                name: "Mike Johnson",
                position: "Head of Operations",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 aspect-square rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
