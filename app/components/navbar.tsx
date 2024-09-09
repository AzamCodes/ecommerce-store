import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./ui/navbar-actions";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <div className="relative w-24 h-24">
              {" "}
              {/* Adjust size as needed */}
              <Image
                src="/brand.png"
                alt="PrimeAttire logo"
                fill
                style={{ objectFit: "contain" }} // Ensures the logo fits within the dimensions without being cropped
              />
            </div>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
