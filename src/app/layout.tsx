import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'materialize-css/dist/css/materialize.min.css';
import Image from 'next/image';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fantastic Costa Rica - Travel guide, buses, tours and more",
  description: "Fantastic Costa Rica is a travel guide to help travellers find their way in Costa Rica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo"><Image
            src="/logo.png" alt="Logo" width={150} height={58}/></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Destinations</a></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li><a href="/blog">Blog</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Destinations</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="/blog">Blog</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <div className="container">
        <div className="section">
      {children}
      </div>
      </div>

      <footer className="page-footer orange">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">We are a team of college students working on this
                project like it's our full time job. Any amount would help support and continue development
                on this project and is greatly appreciated.</p>


            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
          </div>
        </div>

      </footer>
      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script src="init.js"></script>
      </body>
      </html>
  );
}
