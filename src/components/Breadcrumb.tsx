import Link from "next/link";

const Breadcrumb = ({ name }: any) => (
  <div className="p-4 text-sm text-gray-500">
    <Link href="/">Home</Link> &rarr; <span className="capitalize">{name}</span>
  </div>
);

export default Breadcrumb;
