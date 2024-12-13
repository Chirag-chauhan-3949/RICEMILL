// "use client";

// import { Mail, Phone } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// const products = [
//   {
//     id: 1,
//     name: "Premium Rice",
//     description: "High-quality Basmati rice from the finest fields",
//     price: "$24.99",
//     image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070",
//   },
//   {
//     id: 2,
//     name: "Organic Brown Rice",
//     description: "100% organic brown rice, rich in nutrients",
//     price: "$19.99",
//     image: "https://images.unsplash.com/photo-1595489934051-e61a7295fbfb?q=80&w=2070",
//   },
//   {
//     id: 3,
//     name: "Wild Rice Blend",
//     description: "Special blend of premium wild rice varieties",
//     price: "$29.99",
//     image: "https://images.unsplash.com/photo-1626082895103-f4c4193fbde9?q=80&w=2070",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[600px] flex items-center justify-center">
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1607346705432-b3508c3e3f54?q=80&w=2070')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
        
//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl font-bold mb-6">Premium Rice Exports</h1>
//           <p className="text-xl mb-8">
//             Delivering the finest quality rice from India to global markets. 
//             Experience the authentic taste and superior quality of our carefully selected rice varieties.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Button 
//               size="lg"
//               className="bg-white text-black hover:bg-gray-100"
//               onClick={() => window.location.href = "tel:+1234567890"}
//             >
//               <Phone className="mr-2 h-5 w-5" />
//               Contact Us
//             </Button>
//             <Button 
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-black"
//               onClick={() => window.location.href = "mailto:info@example.com"}
//             >
//               <Mail className="mr-2 h-5 w-5" />
//               Email Us
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product) => (
//               <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{product.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600">{product.description}</p>
//                 </CardContent>
//                 <CardFooter className="flex justify-between items-center">
//                   <span className="text-lg font-bold">{product.price}</span>
//                   <Button>Learn More</Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product