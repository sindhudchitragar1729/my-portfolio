import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail } from "lucide-react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { toast } from "sonner";
import { useCreateContactMessage } from "@workspace/api-client-react";
import { SectionHeader } from "@/components/SectionHeader";

const SOCIAL_LINKS = {
  // TODO: swap with real URLs
  linkedin: "https://linkedin.com/in/yourhandle",
  instagram: "https://instagram.com/yourhandle",
  github: "https://github.com/yourhandle",
  email: "hello@example.com",
};

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { mutateAsync, isPending } = useCreateContactMessage();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Name, email and message are required.");
      return;
    }
    try {
      await mutateAsync({
        data: {
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || undefined,
          message: message.trim(),
        },
      });
      toast.success("Message sent. I'll get back to you soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="w-full py-24 scroll-mt-20">
      <SectionHeader
        index="06"
        title={<span>Let's <span className="text-primary">talk</span>.</span>}
        subtitle="Looking for a builder, a collaborator, or just want to compare keyboard layouts? I read everything that lands here."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-xl border border-card-border bg-card/60 backdrop-blur-sm p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="name" required>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isPending}
                maxLength={100}
                className="w-full bg-transparent border-b border-border focus:border-primary focus:outline-none py-2 text-foreground placeholder:text-muted-foreground/40 transition-colors"
                placeholder="who are you?"
              />
            </Field>
            <Field label="email" required>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
                maxLength={200}
                className="w-full bg-transparent border-b border-border focus:border-primary focus:outline-none py-2 text-foreground placeholder:text-muted-foreground/40 transition-colors"
                placeholder="where can I reach you?"
              />
            </Field>
          </div>
          <Field label="subject">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={isPending}
              maxLength={200}
              className="w-full bg-transparent border-b border-border focus:border-primary focus:outline-none py-2 text-foreground placeholder:text-muted-foreground/40 transition-colors"
              placeholder="what's it about?"
            />
          </Field>
          <Field label="message" required>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isPending}
              rows={5}
              maxLength={5000}
              className="w-full bg-transparent border-b border-border focus:border-primary focus:outline-none py-2 text-foreground placeholder:text-muted-foreground/40 transition-colors resize-none"
              placeholder="tell me everything."
            />
          </Field>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-mono text-muted-foreground/60">
              {message.length}/5000
            </span>
            <motion.button
              type="submit"
              disabled={isPending}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> sending
                </>
              ) : (
                <>
                  send <Send size={14} />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="rounded-xl border border-card-border bg-card/60 backdrop-blur-sm p-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
              elsewhere
            </h4>
            <div className="space-y-3">
              <SocialRow
                href={`mailto:${SOCIAL_LINKS.email}`}
                icon={<Mail size={16} />}
                label="email"
                handle={SOCIAL_LINKS.email}
              />
              <SocialRow
                href={SOCIAL_LINKS.linkedin}
                icon={<FiLinkedin size={16} />}
                label="linkedin"
                handle="/in/yourhandle"
              />
              <SocialRow
                href={SOCIAL_LINKS.instagram}
                icon={<FiInstagram size={16} />}
                label="instagram"
                handle="@yourhandle"
              />
              <SocialRow
                href={SOCIAL_LINKS.github}
                icon={<FiGithub size={16} />}
                label="github"
                handle="@yourhandle"
              />
            </div>
          </div>
          <div className="rounded-xl border border-card-border bg-card/40 p-6 font-mono text-xs text-muted-foreground space-y-1">
            <p>
              <span className="text-primary">$</span> uptime --status
            </p>
            <p className="pl-3 text-foreground/80">
              available for select projects
            </p>
            <p className="pl-3 text-muted-foreground/60">
              avg. reply time: ~24h
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
        {label}
        {required ? <span className="text-primary ml-1">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function SocialRow({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      className="flex items-center justify-between gap-3 group py-2 border-b border-border/40 last:border-0"
    >
      <span className="flex items-center gap-3 text-foreground/90 group-hover:text-primary transition-colors">
        {icon}
        <span className="text-sm font-mono">{label}</span>
      </span>
      <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
        {handle}
      </span>
    </motion.a>
  );
}
