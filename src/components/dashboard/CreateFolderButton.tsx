import { FolderPlus } from "lucide-react";
import React from "react";
import CreateFolderModel from "./CreateFolderModel";

const CreateFolderButton = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type="button" className="  p-2 " onClick={() => setOpen(true)}>
        <FolderPlus className=" w-4 hover:text-white text-white/60 " />
      </button>
      <CreateFolderModel open={open} setOpen={setOpen} />
    </>
  );
};

export default CreateFolderButton;
