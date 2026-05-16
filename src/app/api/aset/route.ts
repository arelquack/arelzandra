import { NextResponse } from "next/server";
import { MOCK_ASET } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json(MOCK_ASET);
}

export async function POST(request: Request) {
  const body = await request.json();
  const asetBaru = {
    id: Math.floor(Math.random() * 900) + 100,
    nama: body.nama,
    kategori: body.kategori,
    status: body.status || "tersedia",
  };
  MOCK_ASET.push(asetBaru);
  return NextResponse.json({ message: "Sukses!", data: asetBaru }, { status: 201 });
}