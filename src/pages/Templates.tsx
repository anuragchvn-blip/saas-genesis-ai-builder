
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Template {
  id: string;
  idea_text: string;
  generated_json: {
    hero: {
      headline: string;
      tagline: string;
    };
  };
  created_at: string;
}

const Templates = () => {
  const { user } = useAuth();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchTemplates = async () => {
      try {
        const { data, error } = await supabase
          .from("templates")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setTemplates(data || []);
      } catch (error) {
        console.error("Error fetching templates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, [user]);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0F111A] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Templates</h1>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : templates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="bg-gray-800/50 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="truncate">
                    {template.generated_json.hero.headline}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {template.generated_json.hero.tagline}
                  </p>
                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold">Original idea:</span>{" "}
                    {template.idea_text}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white">
                    View
                  </Button>
                  <span className="text-xs text-gray-400">
                    {new Date(template.created_at).toLocaleDateString()}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-800/30 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No templates yet</h3>
            <p className="text-gray-400 mb-6">
              Generate your first SaaS landing page to see it here
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/">Create a template</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;
