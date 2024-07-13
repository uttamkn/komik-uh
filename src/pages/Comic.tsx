import { useAuth } from "../context/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { getToken } from "../api/utils";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { useLayoutEffect } from "react";
import Comments from "../components/Comments";
import { Progress } from "../../@/components/ui/progress";

const Comic: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel }: any = pageNavigationPluginInstance;
  const backend = import.meta.env.VITE_API_URL;
  const pdfurl = `${backend}/comics/id/${id}`;

  useLayoutEffect(() => {
    if (loading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
      if (!user) {
        navigate("/auth");
      }
    }
  }, [loading, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Redirecting...</div>;
  }

  const handleClick = () => {
    console.log(curPage);
    navigate("/");
  };

  let curPage = 0;
  return (
    <div className="">
      <button onClick={handleClick}>back</button>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{ height: "1000px" }}>
          <Viewer
            fileUrl={pdfurl}
            renderLoader={(percentages) => (
              <Progress value={percentages} className="w-[60%]" />
            )}
            httpHeaders={{
              Authorization: `Bearer ${getToken()}`,
            }}
            plugins={[pageNavigationPluginInstance]}
          />
        </div>
      </Worker>
      <CurrentPageLabel>
        {({ currentPage }: any) => {
          curPage = currentPage;
        }}
      </CurrentPageLabel>
      <div>
        <Comments bookid={id} userid={user.id} />
      </div>
    </div>
  );
};

export default Comic;
