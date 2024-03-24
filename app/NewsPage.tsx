"use client";
import "./reset.css";
import "./globals.css";
import "./typography.css";

import type NewsEvent from '@/types/NewsEvent';
import { DataProvider } from "@/context/DataContext";
import PageHeader from "./PageHeader";
import TopNews from "./TopNews";
import TimeLine from "./TimeLine";

type NewsPage = {
  items: NewsEvent[];
}

const NewsPage = ({ items }: NewsPage) => (
  <DataProvider value={items}>
    <PageHeader />
    <TopNews />
    <TimeLine />
  </DataProvider>
);

export default NewsPage;
