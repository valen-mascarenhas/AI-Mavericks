import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "../ui/table";
  import Badge from "../ui/badge/Badge";
  import Image from "next/image";
  
  // Define the TypeScript interface for the table rows
  interface Product {
    id: number; // Unique identifier for each product
    name: string; // Product name
    variants: string; // Number of variants (e.g., "1 Variant", "2 Variants")
    category: string; // Category of the product
    price: string; // Price of the product (as a string with currency symbol)
    // status: string; // Status of the product
    image: string; // URL or path to the product image
    status: "Most Liked" | "Most Disliked"; // Status of the product
  }
  
  // Define the table data using the interface
  const tableData: Product[] = [
    {
      id: 1,
      name: "Reduction in Waste",
      variants: "2 Variants",
      category: "20%",
      price: "$2399.00",
      status: "Most Liked",
      image: "/images/product/db.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Employee Satisfaction",
      variants: "1 Variant",
      category: "85%",
      price: "$879.00",
      status: "Most Disliked",
      image: "/images/product/es.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Prediction Accuracy",
      variants: "2 Variants",
      category: "84%",
      price: "$1869.00",
      status: "Most Liked",
      image: "/images/product/g.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Cost Savings",
      variants: "2 Variants",
      category: "15%",
      price: "$1699.00",
      status: "Most Disliked",
      image: "/images/product/cs.jpg", // Replace with actual image URL
    },
  ];
  
  export default function ImpactReport() {
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Impact Metrics Report
            </h3>
          </div>
  
          <div className="flex items-center gap-3">
            {/* <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              See all
            </button> */}
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Metrics
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Value (%)
                </TableCell>
              </TableRow>
            </TableHeader>
  
            {/* Table Body */}
  
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {tableData.map((product) => (
                <TableRow key={product.id} className="">
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                        <Image
                          width={50}
                          height={50}
                          src={product.image}
                          className="h-[50px] w-[50px]"
                          alt={product.name}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {product.name}
                        </p>
                        {/* <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                          {product.variants}
                        </span> */}
                      </div>
                    </div>
                  </TableCell>
                  {/* <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {product.price}
                  </TableCell> */}
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {product.category}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  