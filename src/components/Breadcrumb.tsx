import Link from "next/link";

interface Props {
  name: string;
}

const Breadcrumb = ({ name }: Props) => (
  <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-400">
    <Link href="/" className="hover:text-slate-600">
      Home
    </Link>
    <span aria-hidden="true"> &rarr; </span>
    <span className="capitalize text-slate-700">{name}</span>
  </nav>
);

export default Breadcrumb;
