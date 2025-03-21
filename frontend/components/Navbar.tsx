import React from "react";
import { Leaf, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
type NavBarProps = {
  isAuthenticated: boolean;
};
function Navbar({ isAuthenticated }: NavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAbout = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-green-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="text-white" size={24} />
            <span className="text-white text-xl font-semibold">BioGenius</span>
          </Link>

          <div className="flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>
              Início
            </NavLink>
            <button
              onClick={scrollToAbout}
              className="text-white hover:text-green-200 transition-colors"
            >
              Sobre
            </button>
            <NavLink to="/ranking" active={location.pathname === "/ranking"}>
              Ranking
            </NavLink>
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors"
                >
                  <User size={20} />
                  <span>Perfil</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors"
                >
                  <User size={20} />
                  <span>Login</span>
                </Link>
               </>
            )} 
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  children: React.ReactNode;
  active?: boolean;
  to: string;
}

function NavLink({ children, active, to }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`text-white hover:text-green-200 transition-colors ${
        active ? "font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
