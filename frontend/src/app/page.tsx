"use client";

import type { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "@/utils";

const Index: NextPage = () => {
  const url = "http://localhost:8000/api/health_check";
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div>Rails疎通確認</div>
      <div>レスポンスメッセージ: {data.message}</div>
    </>
  );
};

export default Index;
