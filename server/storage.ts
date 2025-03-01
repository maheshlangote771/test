import { users, type User, type InsertUser } from "@shared/schema";
import { type Contact, type InsertContact, type Blog, type InsertBlog, type Testimonial, type InsertTestimonial } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBlogs(): Promise<Blog[]>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private blogs: Map<number, Blog>;
  private testimonials: Map<number, Testimonial>;
  private currentId: number;
  private currentContactId: number;
  private currentBlogId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogs = new Map();
    this.testimonials = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
    this.currentBlogId = 1;
    this.currentTestimonialId = 1;

    // Add some sample blog posts
    this.initializeSampleBlogs();
    this.initializeSampleTestimonials();
  }

  private initializeSampleBlogs() {
    const sampleBlogs: InsertBlog[] = [
      {
        title: "The Future of School Management Systems",
        slug: "future-of-school-management-systems",
        summary: "Discover how modern school ERP systems are transforming education management",
        content: `
          <p>School management systems have come a long way from traditional paper-based methods. Modern school ERP solutions offer comprehensive features that streamline administrative tasks, enhance communication, and improve overall efficiency.</p>
          <h2>Key Benefits of Modern School ERP Systems</h2>
          <ul>
            <li>Automated attendance tracking</li>
            <li>Real-time academic performance monitoring</li>
            <li>Seamless communication between teachers, students, and parents</li>
            <li>Efficient resource management</li>
          </ul>
          <p>The integration of technology in school management has revolutionized how educational institutions operate. From digital attendance systems to online homework submission, these changes have made school administration more efficient and effective.</p>
          <h2>Future Trends</h2>
          <p>As we look to the future, we can expect to see even more innovative features in school management systems:</p>
          <ul>
            <li>AI-powered learning analytics</li>
            <li>Blockchain for academic credentials</li>
            <li>Virtual and augmented reality in education</li>
            <li>Personalized learning paths</li>
          </ul>
        `,
        coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
        author: "John Smith",
        authorRole: "Education Technology Specialist",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        readingTime: "5 min read",
        tags: ["Education", "Technology", "School ERP", "Digital Transformation"],
      },
      {
        title: "Embracing Digital Transformation in Education",
        slug: "embracing-digital-transformation-education",
        summary: "Learn how schools are adapting to the digital age with modern technology",
        content: `
          <p>The education sector is undergoing a significant digital transformation. Schools that embrace modern technology are better positioned to provide quality education and prepare students for the future.</p>
          <h2>Impact of Digital Transformation</h2>
          <ul>
            <li>Enhanced learning experience through interactive digital content</li>
            <li>Improved administrative efficiency with automated systems</li>
            <li>Better data-driven decision making using analytics</li>
            <li>Increased parent engagement through digital communication channels</li>
          </ul>
          <p>Digital transformation is not just about implementing new technologies; it's about changing the way we think about education and creating new opportunities for learning and growth.</p>
          <h2>Success Stories</h2>
          <p>Many schools have already seen remarkable results from their digital transformation initiatives:</p>
          <ul>
            <li>50% reduction in administrative workload</li>
            <li>30% improvement in parent-teacher communication</li>
            <li>Significant increase in student engagement</li>
            <li>Better tracking of student progress</li>
          </ul>
        `,
        coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        author: "Sarah Johnson",
        authorRole: "Digital Transformation Consultant",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        readingTime: "6 min read",
        tags: ["Education", "Digital Transformation", "Technology", "Innovation"],
      },
      {
        title: "The Role of AI in Modern Education",
        slug: "role-of-ai-in-modern-education",
        summary: "Exploring how artificial intelligence is reshaping the educational landscape",
        content: `
          <p>Artificial Intelligence is revolutionizing education by providing personalized learning experiences and automating administrative tasks. This technology is helping educators focus more on teaching and less on paperwork.</p>
          <h2>Applications of AI in Education</h2>
          <ul>
            <li>Personalized learning paths</li>
            <li>Automated grading systems</li>
            <li>Predictive analytics for student performance</li>
            <li>Smart content creation and curation</li>
          </ul>
          <p>The integration of AI in education is creating new possibilities for both teachers and students, making learning more effective and engaging than ever before.</p>
        `,
        coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        author: "David Chen",
        authorRole: "AI in Education Specialist",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        readingTime: "7 min read",
        tags: ["AI", "Education", "Technology", "Innovation"],
      },
    ];

    sampleBlogs.forEach((blog) => {
      this.createBlog(blog);
    });
  }

  private initializeSampleTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Michael Brown",
        role: "Principal",
        company: "Springfield High School",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        content: "The School ERP system has transformed how we manage our institution. The efficiency gains have been remarkable.",
        rating: "5",
      },
      {
        name: "Emily Wilson",
        role: "IT Director",
        company: "Riverside Academy",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        content: "Implementing MusterDekho's solutions was the best decision we made for our school's digital transformation journey.",
        rating: "5",
      },
      {
        name: "James Rodriguez",
        role: "Administrative Head",
        company: "Global International School",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        content: "The support team is exceptional, and the system is very user-friendly. Highly recommended!",
        rating: "5",
      },
    ];

    sampleTestimonials.forEach((testimonial) => {
      this.createTestimonial(testimonial);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogs(): Promise<Blog[]> {
    return Array.from(this.blogs.values()).sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return Array.from(this.blogs.values()).find((blog) => blog.slug === slug);
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const id = this.currentBlogId++;
    const newBlog: Blog = {
      ...blog,
      id,
      publishedAt: new Date(),
    };
    this.blogs.set(id, newBlog);
    return newBlog;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact: Contact = { ...contact, id, company: contact.company || null };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemStorage();