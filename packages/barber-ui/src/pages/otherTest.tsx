import Link from "next/link";

function OtherTest() {
  return (
    <div className="flex flex-col">
      <Link href="/">{`< Back`}</Link>
      <div>OtherTest</div>
    </div>
  );
}

export default OtherTest;
