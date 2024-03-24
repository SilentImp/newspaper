"use client";
import "./reset.css";
import "./globals.css";
import "./typography.css";

import type NewsEvent from '@/types/NewsEvent';
import { DataProvider } from "@/context/DataContext";

type NewsPage = {
  items: NewsEvent[];
}

 const NewsPage = ({ items }: NewsPage) => (
  <DataProvider value={items}>
    <h1>Midnight Post</h1>
  </DataProvider>
);

export default NewsPage;
