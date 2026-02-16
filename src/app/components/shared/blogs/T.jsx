'use client';

import useTranslate from "@/hooks/useTranslate";


export default function T({ children }) {
  const translated = useTranslate(children);
  return translated;
}
