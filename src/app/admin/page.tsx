"use client";
import { useState } from "react";
import { CardComp } from "../admin/_components/Card";
import { useAuthFetch } from "../(Hooks)/FetchData";
import { Button } from "@/components/ui/button";
import { FilteredFood } from "./_components/FilteredFood";

type OrderItem = {
	food: string;
	quanity: number;
};

export default function Home() {
	
	return <div className="w-[100%] bg-primary-foreground flex flex-wrap items-center text-center justify-center text-4xl">admin page</div>;
}
