import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';
import ProjectItems from '@/components/ProjectItems';

export default async function SchoolProjectList() {
  await connection();

  // Temporary delay to see the skeleton. Remove after testing.
  await new Promise((res) => setTimeout(res, 2000));

  const projects = await getProjects('school');
  return <ProjectItems projects={projects} />;
}