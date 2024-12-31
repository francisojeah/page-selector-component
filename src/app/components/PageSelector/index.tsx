"use client";

import { useState, useCallback, useMemo } from "react";
import PageCheckbox from "./PageCheckbox";
import ActionButton from "./ActionButton";

interface PagesState {
  [key: string]: boolean;
}

interface PageSelectorProps {
  pages: string[];
}

export default function PageSelector({ pages }: PageSelectorProps) {
  const initialPagesState = useMemo(() => {
    return pages.reduce((acc, page) => {
      acc[page] = false;
      return acc;
    }, {} as PagesState);
  }, [pages]);

  const [selectedPages, setSelectedPages] =
    useState<PagesState>(initialPagesState);

  const areAllPagesSelected = useCallback(() => {
    return pages.length > 0 && pages.every((page) => selectedPages[page]);
  }, [selectedPages, pages]);

  const handlePageChange = useCallback((page: string) => {
    setSelectedPages((prev) => ({
      ...prev,
      [page]: !prev[page],
    }));
  }, []);

  const handleAllPagesChange = useCallback(() => {
    const newValue = !areAllPagesSelected();
    setSelectedPages(
      pages.reduce((acc, page) => {
        acc[page] = newValue;
        return acc;
      }, {} as PagesState)
    );
  }, [pages, areAllPagesSelected]);

  const handleDone = useCallback(() => {
    const selectedPageNames = pages.filter((page) => selectedPages[page]);
    console.log("Selected pages:", selectedPageNames);
  }, [selectedPages, pages]);

  return (
    <div className="w-full max-w-[23.125rem] mx-auto p-[0.6875rem] bg-white rounded-[0.375rem] border border-[#EEEEEE] shadow-page-selector">
      <PageCheckbox
        label="All pages"
        checked={areAllPagesSelected()}
        onChange={handleAllPagesChange}
      />

      <hr className="my-[0.625rem] border-t-[0.04375rem] border-[#CDCDCD]" />

      <div className="mt-1">
        {pages.map((page) => (
          <PageCheckbox
            key={page}
            label={page}
            checked={!!selectedPages[page]}
            onChange={() => handlePageChange(page)}
          />
        ))}
      </div>

      <hr className="my-[0.625rem] border-t-[0.04375rem] border-[#CDCDCD]" />

      <ActionButton text="Done" onClick={handleDone} />
    </div>
  );
}
