import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { CheckCircle, Users, Calendar, Book, Bell, FileText } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Student Management",
    description: "Efficiently manage student records, attendance, and academic performance tracking."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Timetable Management",
    description: "Create and manage class schedules, teacher assignments, and academic calendar."
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Curriculum Planning",
    description: "Plan and organize curriculum, assignments, and learning materials."
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Communication",
    description: "Seamless communication between teachers, students, and parents."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Report Generation",
    description: "Generate detailed reports on student progress and school performance."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Attendance Tracking",
    description: "Automated attendance tracking and reporting system."
  }
];

export default function SchoolERP() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${
              "https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
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
            <motion.h1 variants={fadeIn} className="text-5xl font-bold mb-6">
              School ERP Solution
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-600 mb-8">
              A comprehensive school management system that streamlines operations and enhances educational outcomes.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg">
                  Schedule Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
              Key Features
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
              Our School ERP system comes packed with features designed to make school management effortless.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
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
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290"
                alt="School Management"
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
                Why Choose Our ERP?
              </motion.h2>
              <motion.ul variants={fadeIn} className="space-y-4">
                {[
                  "Intuitive and user-friendly interface",
                  "Comprehensive reporting system",
                  "Mobile-first approach",
                  "24/7 technical support",
                  "Regular updates and improvements",
                  "Data security and backup"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
