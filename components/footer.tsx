"use client";

import { Card } from "@/components/ui/card";
import { Twitter, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyles = "transition-all duration-300 hover:text-white/90 hover:translate-x-1 truncate block";
  const iconStyles = "transition-all duration-300 hover:text-white/90 hover:scale-110";

  return (
    <footer className="mt-auto">
      <div className="mt-8 mb-4 mx-4">
        <Card className="bg-[#0090d0]/90 backdrop-blur-md text-white/90 p-6 shadow-lg hover:bg-[#0090d0]/90">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4 truncate">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/driver-standings" className={linkStyles}>
                      Driver Standings
                    </Link>
                  </li>
                  <li>
                    <Link href="/team-standings" className={linkStyles}>
                      Team Standings
                    </Link>
                  </li>
                  <li>
                    <Link href="/calendar" className={linkStyles}>
                      Race Calendar
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4 truncate">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <a href="mailto:contact@f2analytics.com" className={linkStyles}>
                      contact@f2analytics.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4 truncate">Follow Us</h3>
                <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                  <a href="#" className={iconStyles}>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className={iconStyles}>
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className={iconStyles}>
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className={iconStyles}>
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4 truncate">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className={linkStyles}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className={linkStyles}>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/20 text-center">
              <p className="truncate">© {currentYear} Formula 2 Analytics. All rights reserved.</p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}