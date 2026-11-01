import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectDetail from '../components/ProjectDetail';
import RelatedProjects from '../components/project/RelatedProjects';
import { getProjectBySlug, projects, Project } from '../data/projects';

const ProjectView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }
    const current = getProjectBySlug(slug);
    if (!current) {
      navigate('/');
      return;
    }
    const index = projects.findIndex(item => item.slug === slug);
    setProject(current);
    setPrevProject(index > 0 ? projects[index - 1] : null);
    setNextProject(index < projects.length - 1 ? projects[index + 1] : null);
  }, [slug, navigate]);

  if (!project) {
    return <Layout><div className="container-custom flex min-h-[50vh] items-center justify-center"><span className="signal-dot animate-pulse" /></div></Layout>;
  }

  return (
    <Layout>
      <div className="container-custom py-8 md:py-14">
        <Link to="/" className="eyebrow mb-10 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:mb-16">
          <ArrowLeft size={15} /> Back to archive
        </Link>
        <ProjectDetail project={project} />
        <RelatedProjects currentProject={project} allProjects={projects} />
        <div className="mt-24 grid border-t border-border md:grid-cols-2">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className="group flex items-center gap-4 border-b border-border py-8 md:border-b-0 md:border-r md:pr-8">
              <ArrowLeft size={20} className="text-primary transition-transform group-hover:-translate-x-2" />
              <span><span className="eyebrow block text-muted-foreground">Previous</span><span className="display-heading mt-2 block text-2xl">{prevProject.title}</span></span>
            </Link>
          ) : <div />}
          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className="group flex items-center justify-end gap-4 py-8 text-right md:pl-8">
              <span><span className="eyebrow block text-muted-foreground">Next</span><span className="display-heading mt-2 block text-2xl">{nextProject.title}</span></span>
              <ArrowRight size={20} className="text-primary transition-transform group-hover:translate-x-2" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectView;
