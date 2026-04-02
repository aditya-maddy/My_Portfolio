import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   try {
  //     const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  //     submissions.push({
  //       ...formData,
  //       timestamp: new Date().toISOString()
  //     });
  //     localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
  //     toast.success('Message sent successfully');
  //     setFormData({ name: '', email: '', message: '' });
  //     setErrors({});
  //   } catch (error) {
  //     toast.error('Failed to send message. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN ;   // 🔴 put your token
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;       // 🔴 put your chat id

  const text = `
🚀 New Portfolio Contact

👤 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

📅 Time: ${new Date().toLocaleString()}
`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    toast.success("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  } catch (error) {
    toast.error("Failed to send message ❌");
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background text-foreground border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background text-foreground border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 bg-background text-foreground border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 font-medium"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}