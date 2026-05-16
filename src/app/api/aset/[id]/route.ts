import { NextResponse } from "next/server";
import { MOCK_ASET } from "@/lib/mockData";

export async function DELETE(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  // Ekstrak nilai id dari Promise params
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  
  const index = MOCK_ASET.findIndex((a) => a.id === id);
  
  // Hapus data dari array jika ID ditemukan
  if (index > -1) MOCK_ASET.splice(index, 1);
  
  return NextResponse.json({ message: "Dihapus" });
}

export async function PATCH(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  // Ekstrak nilai id dari Promise params
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  
  const body = await request.json();
  const aset = MOCK_ASET.find((a) => a.id === id);
  
  // Ubah status jika ID ditemukan
  if (aset) aset.status = body.status;
  
  return NextResponse.json({ message: "Diupdate" });
}