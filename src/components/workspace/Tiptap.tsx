import { EditorContent, useEditor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import TaskItem from "@tiptap/extension-task-item";
import { HexColorPicker } from "react-colorful";

const lowlight = createLowlight(all);

import {
  Bold,
  ChevronDown,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  List,
  ListOrdered,
  Palette,
  SquareCheckBig,
  TextQuote,
  Type,
  UnderlineIcon,
} from "lucide-react";

import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import { Color } from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import TaskList from "@tiptap/extension-task-list";
import clsx from "clsx";
import Blockquote from "@tiptap/extension-blockquote";
import { useEffect, useState } from "react";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { all, createLowlight } from "lowlight";

const Tiptap = () => {
  const lowlight = createLowlight(all);
  const [color, setColor] = useState("#FFFFFF");
  const extensions = [
    StarterKit,
    TextStyle,
    Document,
    Paragraph,
    Underline,
    TaskList,
    Text,
    TaskItem.configure({
      nested: true,
      HTMLAttributes: {
        class: "list-none",
      },
    }),
    Heading.configure({ levels: [1, 2, 3, 4] }),
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Color,
    Blockquote,
    Placeholder.configure({
      placeholder: "Start writing your notes or document here ...",
    }),
  ];
  const content = ` `;
  const editor = useEditor({
    extensions,
    content,
    injectCSS: false,
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none     ",
      },
    },
    onCreate: ({ editor }) => {
      editor.commands.focus("end");
    },
  });
  useEffect(() => {
    if (!editor) return;
    const saveTimeout = setTimeout(() => {
      console.log(editor.getJSON());
    }, 5000);
    return () => clearTimeout(saveTimeout);
  }, [editor?.getJSON()]);
  editor?.isActive("highlight", { color: "#ffa8a8" });

  return (
    <div className="w-full h-full  outline-none p-8 relative overflow-hidden ">
      <EditorContent
        editor={editor}
        className=" outline-none space-y-0  w-[100%] h-[70vh]  overflow-scroll   "
      />
      <div className=" absolute m-auto bottom-4  border-2 rounded-md bg-secondary flex gap-1/2 p-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex gap-0  hover:bg-background rounded-md items-center justify-center">
              <Type className=" w-4 h-4 m-1" />
              <ChevronDown className=" w-3 h-3 my-auto" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className=" flex   w-fit m-2 gap-2">
            <button
              className={clsx(" p-1   rounded-md ", {
                "bg-primary": editor?.isActive("heading", { level: 1 }),
                "hover:bg-secondary": !editor?.isActive("heading", {
                  level: 1,
                }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1 className=" w-6 h-6" />
            </button>
            <button
              className={clsx(" p-1  rounded-md ", {
                "bg-primary": editor?.isActive("heading", { level: 2 }),
                "hover:bg-secondary": !editor?.isActive("heading", {
                  level: 2,
                }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2 className=" w-6 h-6" />
            </button>
            <button
              className={clsx(" p-1  rounded-md ", {
                "bg-primary": editor?.isActive("heading", { level: 3 }),
                "hover:bg-secondary": !editor?.isActive("heading", {
                  level: 3,
                }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className=" w-6 h-6" />
            </button>
            <button
              className={clsx(" p-1  rounded-md ", {
                "bg-primary": editor?.isActive("heading", { level: 4 }),
                "hover:bg-secondary": !editor?.isActive("heading", {
                  level: 4,
                }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 4 }).run()
              }
            >
              <Heading4 className=" w-6 h-6" />
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className=" flex gap-0.5 border-white/20   border-l-2 ml-2 pl-2 ">
          <button
            onClick={() => {
              editor?.chain().focus().toggleBulletList().run();
            }}
            className={clsx(" p-1 cursor-pointer rounded-md", {
              "bg-primary": editor?.isActive("bulletList"),
              "hover:bg-background": !editor?.isActive("bulletList"),
            })}
          >
            <List className=" w-5 h-5  " />
          </button>
          <button
            onClick={() => {
              editor?.chain().focus().toggleOrderedList().run();
            }}
            className={clsx(" p-1 cursor-pointer rounded-md", {
              "bg-primary": editor?.isActive("orderedList"),
              "hover:bg-background": !editor?.isActive("orderedList"),
            })}
          >
            <ListOrdered className=" w-5 h-5  " />
          </button>
          <button
            onClick={() => {
              editor?.chain().focus().toggleTaskList().run();
            }}
            className={clsx(" p-1 cursor-pointer  rounded-md", {
              "bg-primary": editor?.isActive("taskList"),
              "hover:bg-background": !editor?.isActive("taskList"),
            })}
          >
            <SquareCheckBig className=" w-5 h-5 " />
          </button>
        </div>
        <div className="flex gap-0.5 border-white/20   border-l-2 ml-2 pl-2 ">
          <button
            onClick={() => {
              editor?.chain().focus().toggleCodeBlock().run();
            }}
            className={clsx(" p-1 cursor-pointer rounded-md", {
              "bg-primary": editor?.isActive("codeBlock"),
              "hover:bg-primary": !editor?.isActive("codeBlock"),
            })}
          >
            <Code className=" w-5 h-5   " />
          </button>
        </div>
        <div className=" flex gap-0.5 border-white/20   border-l-2 ml-2 pl-2 ">
          <button
            onClick={() => {
              editor?.chain().focus().toggleBlockquote().run();
            }}
            className={clsx(" p-1 cursor-pointer  rounded-md", {
              "bg-primary": editor?.isActive("blockquote"),
              "hover:bg-background": !editor?.isActive("blockquote"),
            })}
          >
            <TextQuote className=" w-5 h-5   " />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className=" flex gap-0  hover:bg-background rounded-md items-center justify-center">
                <Palette className=" w-4 h-4 m-1" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className=" flex   w-fit m-2 gap-2 p-6"
            >
              <HexColorPicker
                color={color}
                onChange={(newColor: string) => {
                  setColor(newColor);
                  editor?.chain().focus().setColor(newColor).run();
                }}
              />
            </DropdownMenuContent>
            <div className=" flex gap-0.5 border-white/20   border-l-2 ml-2 pl-2 ">
              <button
                onClick={() => {
                  editor?.chain().focus().toggleBold().run();
                }}
                className={clsx(
                  " p-1 cursor-pointer hover:bg-background rounded-md ",
                  {
                    "bg-primary": editor?.isActive("bold"),
                  }
                )}
              >
                <Bold className=" w-5 h-5   " />
              </button>
              <button
                onClick={() => {
                  editor?.chain().focus().toggleItalic().run();
                }}
                className={clsx(" p-1 cursor-pointer  rounded-md ", {
                  "bg-primary": editor?.isActive("italic"),
                  "hover:bg-background": !editor?.isActive("italic"),
                })}
              >
                <Italic className=" w-5 h-5   " />
              </button>
              <button
                onClick={() => {
                  editor?.chain().focus().toggleUnderline().run();
                }}
                className={clsx(" p-1 cursor-pointer  rounded-md ", {
                  "bg-primary": editor?.isActive("underline"),
                  "hover:bg-background": !editor?.isActive("underline"),
                })}
              >
                <UnderlineIcon className=" w-5 h-5" />
              </button>
            </div>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
