"use client"

import { useState } from "react";
import FileInput from "./components/FileInput";
import EmailHeaders from "./components/Headers";
import AttachmentsHeaders from "./components/Attachments";

const Home: React.FC = () => {
  const [details, setDetails] = useState<any>(null)

  return (
    <>

      <FileInput onDataExtracted={(details: any) => setDetails(details)} />

      {/* Results */}
      <EmailHeaders headerDetails={details?.headers} />
      <AttachmentsHeaders attachmentsDetails={details?.attachments} />
      
    </>
  );
}

export default Home;