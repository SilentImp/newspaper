"use client";
import type NewsEvent from "@/types/NewsEvent";
import { ReactNode, createContext, useContext } from "react";

const DataContext = createContext<NewsEvent[]>([]);

type DataProvider = {
  value: NewsEvent[];
  children?: ReactNode;
};

export const DataProvider = ({ value, children }: DataProvider) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
} 

export const useData = () => {
  return useContext(DataContext);
}
