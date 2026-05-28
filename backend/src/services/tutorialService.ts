import { TutorialContent, QueryParams } from '../types';
import { tutorialContent } from '../../data/tutorialContent';

export class TutorialService {
  private static instance: TutorialService;

  private constructor() {}

  public static getInstance(): TutorialService {
    if (!TutorialService.instance) {
      TutorialService.instance = new TutorialService();
    }
    return TutorialService.instance;
  }

  public async getAllTutorials(query?: QueryParams): Promise<TutorialContent[]> {
    let filteredTutorials = [...tutorialContent];

    // Filter by technology
    if (query?.search) {
      const searchTerm = query.search.toLowerCase();
      filteredTutorials = filteredTutorials.filter(
        tutorial =>
          tutorial.title.toLowerCase().includes(searchTerm) ||
          tutorial.description.toLowerCase().includes(searchTerm) ||
          tutorial.technologyId.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by difficulty
    if (query?.difficulty) {
      filteredTutorials = filteredTutorials.filter(
        tutorial => tutorial.difficulty === query.difficulty
      );
    }

    // Sorting
    if (query?.sort) {
      filteredTutorials.sort((a, b) => {
        let aValue: any = a[query.sort as keyof TutorialContent];
        let bValue: any = b[query.sort as keyof TutorialContent];
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return query.order === 'desc' 
            ? bValue.localeCompare(aValue)
            : aValue.localeCompare(bValue);
        }
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return query.order === 'desc' ? bValue - aValue : aValue - bValue;
        }
        
        return 0;
      });
    }

    return filteredTutorials;
  }

  public async getTutorialById(id: string): Promise<TutorialContent | null> {
    return tutorialContent.find(tutorial => tutorial.id === id) || null;
  }

  public async getTutorialByTechnologyId(technologyId: string): Promise<TutorialContent | null> {
    return tutorialContent.find(tutorial => tutorial.technologyId === technologyId) || null;
  }

  public async getTutorialsByDifficulty(difficulty: string): Promise<TutorialContent[]> {
    return tutorialContent.filter(tutorial => tutorial.difficulty === difficulty);
  }

  public async searchTutorials(query: string): Promise<TutorialContent[]> {
    const searchTerm = query.toLowerCase();
    return tutorialContent.filter(
      tutorial =>
        tutorial.title.toLowerCase().includes(searchTerm) ||
        tutorial.description.toLowerCase().includes(searchTerm) ||
        tutorial.technologyId.toLowerCase().includes(searchTerm) ||
        tutorial.learningObjectives?.some(objective => 
          objective.toLowerCase().includes(searchTerm)
        )
    );
  }

  public async getTutorialSections(tutorialId: string): Promise<any[]> {
    const tutorial = await this.getTutorialById(tutorialId);
    return tutorial?.sections || [];
  }

  public async getTutorialLessons(tutorialId: string, sectionId?: string): Promise<any[]> {
    const tutorial = await this.getTutorialById(tutorialId);
    if (!tutorial) return [];

    if (sectionId) {
      const section = tutorial.sections.find(s => s.id === sectionId);
      return section?.lessons || [];
    }

    // Return all lessons from all sections
    return tutorial.sections.flatMap(section => section.lessons);
  }

  public async getLesson(tutorialId: string, sectionId: string, lessonId: string): Promise<any | null> {
    const tutorial = await this.getTutorialById(tutorialId);
    if (!tutorial) return null;

    const section = tutorial.sections.find(s => s.id === sectionId);
    if (!section) return null;

    return section.lessons.find(l => l.id === lessonId) || null;
  }

  public async getTutorialStats(): Promise<{
    totalTutorials: number;
    totalSections: number;
    totalLessons: number;
    averageDuration: number;
    difficultyDistribution: Record<string, number>;
  }> {
    const totalTutorials = tutorialContent.length;
    const totalSections = tutorialContent.reduce((acc, tutorial) => acc + tutorial.sections.length, 0);
    const totalLessons = tutorialContent.reduce((acc, tutorial) => 
      acc + tutorial.sections.reduce((sectionAcc, section) => sectionAcc + section.lessons.length, 0), 0
    );
    
    const totalDuration = tutorialContent.reduce((acc, tutorial) => acc + tutorial.estimatedDuration, 0);
    const averageDuration = totalDuration / totalTutorials;

    const difficultyDistribution = tutorialContent.reduce((acc, tutorial) => {
      acc[tutorial.difficulty] = (acc[tutorial.difficulty] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalTutorials,
      totalSections,
      totalLessons,
      averageDuration,
      difficultyDistribution
    };
  }
}
