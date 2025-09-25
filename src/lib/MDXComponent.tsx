// Interfaces para os componentes HTML
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

interface EmProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

interface StrongProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  children?: React.ReactNode;
}

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
}

interface HrProps extends React.HTMLAttributes<HTMLHRElement> {}

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children?: React.ReactNode;
}

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-3xl font-title uppercase font-bold mb-4" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-2xl font-button font-semibold mb-3 mt-6" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-xl font-medium mb-2 mt-4" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="mb-4 leading-relaxed font-body text-[#99a2a4]" {...props} />
  ),
  em: (props: EmProps) => <em className="italic text-gray-600" {...props} />,
  strong: (props: StrongProps) => (
    <strong className="font-semibold" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: ListItemProps) => (
    <li className="ml-4 font-body text-[#99a2a4]" {...props} />
  ),
  hr: (props: HrProps) => <hr className="border-gray-300 my-8" {...props} />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  pre: (props: PreProps) => (
    <pre
      className="bg-[#0d1220]/50 text-gray-100 p-4 rounded-lg text-sm my-4 whitespace-pre-wrap break-words"
      {...props}
    />
  ),
  code: (props: CodeProps) => (
    <code
      className="bg-[#0d1220]/50 px-1.5 py-0.5 rounded text-[#f5f5f5] text-sm font-mono whitespace-pre-wrap break-words"
      {...props}
    />
  ),
};
