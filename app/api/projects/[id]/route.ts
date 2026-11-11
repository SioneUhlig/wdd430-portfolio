import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = Number(id);

  if (!Number.isInteger(numId)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const project = await getProjectById(numId);
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json(project);
}