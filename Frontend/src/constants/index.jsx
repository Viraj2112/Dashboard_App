import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users, Activity, Library, ShieldCheck, Calendar, Wallet } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";
import AvatarImg from "@/assets/avatar.jpg";
import AvatarImg2 from "@/assets/avatar2.jpg";
import AvatarImg3 from "@/assets/avatar3.png";
import AvatarImg4 from "@/assets/avatar4.jpg";
import ProductImg from "@/assets/product1.jpg";
import ProductImg2 from "@/assets/product2.jpg";
import ProductImg3 from "@/assets/product3.jpg";
import ProductImg4 from "@/assets/product4.jpg";
import ProductImg5 from "@/assets/product5.jpg";
import ProductImg6 from "@/assets/product6.jpg";
import ProductImg7 from "@/assets/product7.jpg";
import ProductImg8 from "@/assets/product8.jpg";
import ProductImg9 from "@/assets/product9.jpg";

export const navbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Activity",
                icon: Activity,
                path: "/activity",
            },
            {
                label: "Library",
                icon: Library,
                path: "/library",
            },
            {
                label: "Security",
                icon: ShieldCheck,
                path: "/security",
            },
            {
                label: "Schedules",
                icon: Calendar,
                path: "/schedules",
            },
            {
                label: "Payouts",
                icon: Wallet,
                path: "/payouts",
            },
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 2000,
    },
    {
        name: "Feb",
        total: 1300,
    },
    {
        name: "Mar",
        total: 1500,
    },
    {
        name: "Apr",
        total: 2300,
    },
    {
        name: "May",
        total: 3500,
    },
    {
        name: "Jun",
        total: 3900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 4500,
    },
    {
        name: "Sep",
        total: 2500,
    },
    {
        name: "Oct",
        total: 4200,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 5000,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: AvatarImg2,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: AvatarImg,
        total: 2000,
    },
    {
        id: 3,
        name: "Harry Brown",
        email: "harry.brown@email.com",
        image: AvatarImg3,
        total: 4000,
    },
    
    
];

export const topProducts = [
    {
        number: 1,
        name: "Toy Car",
        image: ProductImg,
        description: "Cute Toy Car for Kids with Remote Control.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "SmartGoggles",
        image: ProductImg2,
        description: "Smart goggles with augmented reality features.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Smart Watch",
        image: ProductImg3,
        description: "High-performance smartwatch with health tracking.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Nike Shoes",
        image: ProductImg4,
        description: "Stylish Nike shoes for sports and casual wear.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Lamp",
        image: ProductImg5,
        description: "Modern lamp with adjustable brightness and color.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "Tomatoes",
        image: ProductImg6,
        description: "Fresh tomatoes for cooking and salads.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Ice Cream",
        image: ProductImg7,
        description: "Mouth-watering ice cream with various flavors.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Paper Fan",
        image: ProductImg8,
        description: "Handmade paper fan for decoration and cooling.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Candy",
        image: ProductImg9,
        description: "Delicious candy with various flavors and colors.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "Laptop",
        image: ProductImage,
        description: "High-performance laptop for gaming and work.",
        price: 1000.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];
