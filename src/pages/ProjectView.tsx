import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ProjectDetail from '../components/ProjectDetail';
import RelatedProjects from '../components/project/RelatedProjects';
import { getProjectBySlug, projects, Project } from '../data/projects';

const ProjectView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }
    
    const fetchedProject = getProjectBySlug(slug);
    setIsLoading(true);
    
    if (fetchedProject) {
      setProject(fetchedProject);
      
      // Find previous and next projects from all projects
      const currentIndex = projects.findIndex(p => p.slug === slug);
      setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
      setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
      
      setIsLoading(false);
    } else {
      navigate('/');
    }
  }, [slug, navigate]);
  
  if (isLoading || !project) {
    return (
      <Layout>
        <div className="container-custom py-32">
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container-custom py-12 md:py-20">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
        
        <ProjectDetail project={project} />
        
        <RelatedProjects currentProject={project} allProjects={projects} />
        
        <div className="mt-24 pt-8 border-t border-border">
          <div className="flex justify-between">
            {prevProject ? (
              <Link 
                to={`/projects/${prevProject.slug}`}
                className="group flex items-center font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ArrowLeft size={16} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>
                  <span className="block text-xs text-muted-foreground">Previous</span>
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            
            {nextProject ? (
              <Link 
                to={`/projects/${nextProject.slug}`}
                className="group flex items-center text-right font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span>
                  <span className="block text-xs text-muted-foreground">Next</span>
                  {nextProject.title}
                </span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectView;
