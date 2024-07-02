import { useParams } from "react-router-dom";
import { Viewer, Worker, ProgressBar } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { getToken } from "../api/utils";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { useEffect } from "react";

const Comic: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const backend = import.meta.env.VITE_API_URL;
  const pdfurl = `${backend}/comics/id/${id}`;
  // const { CurrentPageLabel } = pageNavigationPluginInstance;

  useEffect(() => {
    return () => {
      console.log("Current page label:");
      //TODO: Display the current page number
    };
  }, []);

  return (
    <div className="">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{ height: "800px" }}>
          <Viewer
            fileUrl={pdfurl}
            renderLoader={(percentages) => (
              <ProgressBar progress={Math.round(percentages)} />
            )}
            httpHeaders={{
              Authorization: `Bearer ${getToken()}`,
            }}
            plugins={[pageNavigationPluginInstance]}
          />
        </div>
      </Worker>
      <div>//TODO: Add the Comments component here</div>
    </div>
  );
};

export default Comic;
