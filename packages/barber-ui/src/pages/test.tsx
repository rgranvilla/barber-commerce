import Link from "next/link";

function Test() {
  return (
    <div className="flex flex-col">
      <Link href="/">{`< Back`}</Link>
      <div>Test</div>
    </div>
  );
}

export default Test;
