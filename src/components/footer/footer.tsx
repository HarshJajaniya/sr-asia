import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#072328] text-white" id="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <Link
                  href="mailto:info@sr-asia.org"
                  className="hover:underline"
                >
                  info@sr-asia.org
                </Link>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+917827051160</span>
                  <span>  01204103023</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-2">
                <Link
                  href="https://x.com/sr_asia?t=eMp7AJ94upGApdHPZ6r21Q&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e1306c] p-1.5 rounded-md hover:opacity-80 transition-opacity"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/sr-asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] p-1.5 rounded-md hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.facebook.com/SRAsia.profile?mibextid=rS40aB7S9Ucbxw6v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877f2] p-1.5 rounded-md hover:opacity-80 transition-opacity"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:underline">
                  Projects & Events
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-medium mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/career" className="hover:underline">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">
                  Newsletter Signup
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#006050] mt-8 pt-6 text-center text-sm">
          <p>© 2025 SR Asia | ISO 9001 Certified</p>
          <p className="mt-1">
            Membership of CII • APO Japan • CTCN • IPLA Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
