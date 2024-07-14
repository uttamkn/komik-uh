import { useAuth } from "../context/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { getToken, putCurrentPage, getCurrentPage } from "../api/utils";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { useLayoutEffect, useState } from "react";
import Comments from "../components/Comments";
import Fallback from "../components/Fallback";
import Loader from "../components/ui/Loader";

const Comic: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const [jumpToPage, setJumpToPage] = useState(0);
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
      } else {
        getCurrentPage(user.id, parseInt(id as string))
          .then((page) => {
            setJumpToPage(page);
          })
          .catch(() => {
            setJumpToPage(0);
          });
      }
    }
  }, [loading, user]);

  if (!user) {
    return <Fallback />;
  }

  const handleClick = async () => {
    if (id === undefined) {
      return;
    }
    await putCurrentPage(user.id, parseInt(id), curPage);
    navigate("/");
  };

  let curPage = 0;
  return (
    <div className="container mx-auto p-4">
      <button
        className="mb-4 px-4 py-2 bg-primary text-secondary rounded"
        onClick={handleClick}
      >
        Back
      </button>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{ height: "100vw" }}
          className="border rounded-lg overflow-hidden"
        >
          <Viewer
            fileUrl={pdfurl}
            renderLoader={(percentages) => (
              <div className="flex items-center justify-center gap-5 min-h-screen text-center">
                <Loader />
                {percentages === 100
                  ? "Loading completed!"
                  : `Loading... ${Math.round(percentages)}%`}
              </div>
            )}
            httpHeaders={{
              Authorization: `Bearer ${getToken()}`,
            }}
            initialPage={jumpToPage}
            plugins={[pageNavigationPluginInstance]}
          />
        </div>
      </Worker>
      <div className="mt-4">
        <CurrentPageLabel>
          {({ currentPage }: any) => {
            curPage = currentPage;
          }}
        </CurrentPageLabel>
        <Comments bookid={id} userid={user.id} />
      </div>
    </div>
  );
};

export default Comic;
