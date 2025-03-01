import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MusterDekho</h3>
            <p className="text-sm text-gray-600">
              Empowering businesses with innovative IT solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web">
                  <a className="text-sm text-gray-600 hover:text-primary">Web Development</a>
                </Link>
              </li>
              <li>
                <Link href="/services#mobile">
                  <a className="text-sm text-gray-600 hover:text-primary">Mobile Apps</a>
                </Link>
              </li>
              <li>
                <Link href="/services#analytics">
                  <a className="text-sm text-gray-600 hover:text-primary">Data Analytics</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-gray-600 hover:text-primary">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-gray-600 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-600">
              Email: info@musterdekho.com<br />
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} MusterDekho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
