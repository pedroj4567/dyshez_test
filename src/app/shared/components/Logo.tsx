import Image from "next/image";

const logoProperties = {
  altInfo: "Logo Dyshex",
  path: "/logo.svg",
};

export default function Logo() {
  return (
    <div className="">
      <Image
        width={194}
        height={47}
        alt={logoProperties.altInfo}
        src={logoProperties.path}
      />
    </div>
  );
}
