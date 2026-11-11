import { Facebook, Instagram, MessageCircle, Music2 } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VahZHmj47XeKIQqgHq3H", icon: MessageCircle },
    { label: "Facebook", href: "https://www.facebook.com/share/1CDyBXWUfS/", icon: Facebook },
    { label: "TikTok", href: "https://www.tiktok.com/@flow_forward", icon: Music2 },
    { label: "Instagram", href: "https://www.instagram.com/flowforward?xtok=MT", icon: Instagram },
  ];

  return <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-medium mb-2">Flowforward | Empowering girls one period at a time</p>
          <p className="mb-4 text-sm font-medium">Let’s connect everywhere!</p>
          <nav aria-label="Follow FlowForward" className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80">
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </a>
            ))}
          </nav>
          <p className="text-sm opacity-80">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};