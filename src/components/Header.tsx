
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-gray-900/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">SaaS Builder AI</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white">
            Home
          </Link>
          {user && (
            <Link to="/templates" className="text-sm font-medium text-gray-300 hover:text-white">
              My Templates
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                  Profile
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/signin">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
