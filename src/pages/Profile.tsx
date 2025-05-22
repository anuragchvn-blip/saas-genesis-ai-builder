
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0F111A] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Account Information</h2>
              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-400">User ID</p>
                  <p className="truncate">{user.id}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 mt-4 border-t border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Account Management</h2>
              <Button 
                variant="destructive" 
                onClick={signOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
