import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`, {
    method: "GET",
    cache: "no-store", // Optional: Ensures fresh data without caching
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch category with id: ${id}`);
  }

  return res.json();
};

export default getCategory;
