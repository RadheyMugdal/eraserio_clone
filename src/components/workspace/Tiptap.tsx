import {
  BubbleMenu,
  EditorContent,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import TaskItem from "@tiptap/extension-task-item";
import { HexColorPicker } from "react-colorful";
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
import { all, createLowlight } from "lowlight";
import TaskList from "@tiptap/extension-task-list";
import clsx from "clsx";
import Blockquote from "@tiptap/extension-blockquote";
import { useState } from "react";
import TextStyle from "@tiptap/extension-text-style";
const Tiptap = () => {
  const [color, setColor] = useState("#FFFFFF");
  const lowlight = createLowlight(all);
  const extensions = [
    StarterKit,
    TextStyle,
    Document,
    Paragraph,
    TaskList,
    Text,
    TaskItem.configure({
      nested: false,
    }),
    Heading.configure({ levels: [1, 2, 3, 4] }),
    CodeBlockLowlight.configure({
      lowlight,
      defaultLanguage: "javascript",
    }),
    Color,
    Blockquote,
    Placeholder.configure({
      placeholder: "Start typing...",
    }),
  ];
  const content = `<h1>📂 Hello World!</h1>`;
  const editor = useEditor({
    extensions,
    content,
    injectCSS: false,
    autofocus: true,
    editorProps: {
      attributes: {
        class:
          "focus:outline-none prose dark:prose-invert prose-h1:text-3xl p-0  prose-p:space-y-0  ",
      },
    },
  });
  editor?.isActive("highlight", { color: "#ffa8a8" });

  return (
    <div className="w-full h-full outline-none p-8 relative text- ">
      <EditorContent editor={editor} className=" outline-none" />
      <BubbleMenu editor={editor}>
        <ToggleGroup
          type="multiple"
          className="  bg-popover p-1 border rounded-md "
        >
          <ToggleGroupItem
            value="a"
            className=" text-white/70 hover:text-white"
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            {" "}
            <Bold className="h-3 w-" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="b"
            className=" text-white/70 hover:text-white"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          >
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="c"
            className=" text-white/70 hover:text-white "
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </BubbleMenu>
      <div className=" absolute m-auto bottom-4  border-2 rounded-md flex p-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex gap-0  hover:bg-secondary rounded-md items-center justify-center">
              <Type className=" w-4 h-4 m-1" />
              <ChevronDown className=" w-3 h-3 my-auto" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className=" flex   w-fit m-2 gap-2">
            <button
              className={clsx(" p-1  hover:bg-secondary rounded-md ", {
                "bg-secondary": editor?.isActive("heading", { level: 1 }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1 className=" w-6 h-6" />
            </button>
            <button
              className={clsx(" p-1  hover:bg-secondary rounded-md ", {
                "bg-secondary": editor?.isActive("heading", { level: 2 }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2 className=" w-6 h-6" />
            </button>
            <button
              className={clsx(" p-1  hover:bg-secondary rounded-md ", {
                "bg-secondary": editor?.isActive("heading", { level: 3 }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className=" w-6 h-6" />
            </button>
            <button
              className={clsx(" p-1  hover:bg-secondary rounded-md ", {
                "bg-secondary": editor?.isActive("heading", { level: 4 }),
              })}
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 4 }).run()
              }
            >
              <Heading4 className=" w-6 h-6" />
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className=" mx-2 text-white/70">|</span>
        <button
          onClick={() => {
            editor?.chain().focus().toggleBulletList().run();
          }}
          className=" p-1 cursor-pointer hover:bg-secondary rounded-md"
        >
          <List className=" w-5 h-5  " />
        </button>
        <button
          onClick={() => {
            editor?.chain().focus().toggleOrderedList().run();
          }}
          className=" p-1 cursor-pointer hover:bg-secondary rounded-md"
        >
          <ListOrdered className=" w-5 h-5  " />
        </button>
        <button
          onClick={() => {
            editor?.chain().focus().toggleTaskList().run();
          }}
          className=" p-1 cursor-pointer hover:bg-secondary rounded-md"
        >
          <SquareCheckBig className=" w-5 h-5 " />
        </button>
        <span className=" mx-2 text-white/70">|</span>
        <button
          onClick={() => {
            editor?.chain().focus().toggleCodeBlock().run();
          }}
          className=" p-1 cursor-pointer hover:bg-secondary rounded-md"
        >
          <Code className=" w-5 h-5   " />
        </button>
        <span className=" mx-2 text-white/70">|</span>
        <button
          onClick={() => {
            editor?.chain().focus().toggleBlockquote().run();
          }}
          className=" p-1 cursor-pointer hover:bg-secondary rounded-md"
        >
          <TextQuote className=" w-5 h-5   " />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex gap-0  hover:bg-secondary rounded-md items-center justify-center">
              <Palette className=" w-4 h-4 m-1" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className=" flex   w-fit m-2 gap-2">
            <HexColorPicker
              color={color}
              onChange={(newColor: string) => {
                editor?.chain().focus().setColor(newColor).run();
              }}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Tiptap;
