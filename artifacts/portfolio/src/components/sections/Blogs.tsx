import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const BLOG_POSTS = [
  {
    id: 1,
    title: "From Artificial Intelligence to Deep Neural Networks: A Comprehensive Overview",
    date: "May 10, 2026",
    readTime: "12 min read",
    category: "AI & Deep Learning",
    excerpt: "Artificial Intelligence (AI) is the broad science of creating systems capable of mimicking human cognitive functions like reasoning and learning. Within AI, Machine Learning (ML) emerged as a way for systems to learn from data without explicit programming. At the pinnacle of this evolution are Deep Neural Networks (DNNs), architectures inspired by the biological brain. DNNs utilize multiple interconnected hidden layers of artificial neurons to process inputs using mathematical weights, biases, and activation functions. Through a process called backpropagation, these networks adjust their parameters by calculating the gradient of the loss function, effectively learning to minimize errors. This progression from basic AI rules to the deep, layered architecture of DNNs enables machines to automatically extract complex patterns, powering today's breakthroughs in natural language processing and computer vision.",
    link: "https://www.ibm.com/topics/artificial-intelligence"
  },
  {
    id: 2,
    title: "Demystifying Local LLMs: A Guide for Full-Stack Developers",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    excerpt: "Exploring how to integrate local language models and fine-tune them directly within a Node.js and React stack, cutting down latency and API costs for AI features.",
    link: "https://huggingface.co/blog/run-llms-locally"
  },
  {
    id: 3,
    title: "The Evolution of Data Fetching in Modern React",
    date: "April 18, 2026",
    readTime: "6 min read",
    category: "Web Development",
    excerpt: "A deep dive into how Server Components and new caching mechanisms are reshaping our mental model of front-end applications, specifically for data-heavy dashboards.",
    link: "https://www.smashingmagazine.com/2023/07/evolution-react-data-fetching/"
  },
  {
    id: 4,
    title: "Optimizing PostgreSQL Queries for Machine Learning Pipelines",
    date: "March 29, 2026",
    readTime: "10 min read",
    category: "Database & ML",
    excerpt: "How I optimized analytical queries on a large dataset to feed data into my machine learning models faster without increasing server load or memory footprint.",
    link: "https://www.timescale.com/blog/how-to-optimize-postgresql-queries-for-ai-and-machine-learning/"
  }
];

export function Blogs() {
  return (
    <section id="blogs" className="w-full py-24 scroll-mt-20">
      <SectionHeader 
        index="07" 
        title="Writing" 
        subtitle="Thoughts, research, and explorations on new technologies." 
      />
      
      <div className="grid md:grid-cols-1 gap-6 mt-10">
        {BLOG_POSTS.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group block relative rounded-xl border border-card-border bg-card/40 hover:bg-card/70 transition-colors p-6 md:p-8 overflow-hidden"
          >
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/80">
                  <span className="text-primary px-2 py-0.5 rounded-sm bg-primary/10 border border-primary/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground/95 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 md:pt-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
