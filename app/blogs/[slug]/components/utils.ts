import blogImage from "../../../../public/assets/blogs/blog image.png"; // adjust depth

const IMAGE_BASE_URL = "https://shoot.product-api.hamroyouthit.com";

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function resolveImage(imagePath: string | null): string | typeof blogImage {
  if (!imagePath) return blogImage;
  if (imagePath.startsWith("http")) return imagePath;
  return `${IMAGE_BASE_URL}${imagePath}`;
}