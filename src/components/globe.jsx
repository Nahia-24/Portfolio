import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "php",
  "vue",
  "laravel",
  "react",
  "html5",
  "css3",
  "express",
  "firebase",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "nodejs",
  "mysql",
  "mongodb",
  "vite",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg bg-[#f5f5dc]/90 items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
