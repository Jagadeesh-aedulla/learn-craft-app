const { tutorialContent } = require('../../data/tutorialContent');

class TutorialService {
  constructor() {
    if (TutorialService.instance) {
      return TutorialService.instance;
    }

    TutorialService.instance = this;
    return this;
  }

  async getAllTutorials(query) {
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
        let aValue = a[query.sort];
        let bValue = b[query.sort];
        
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

  async getTutorialById(id) {
    return tutorialContent.find(tutorial => tutorial.id === id) || null;
  }

  async getTutorialByTechnologyId(technologyId) {
    return tutorialContent.find(tutorial => tutorial.technologyId === technologyId) || null;
  }

  async getTutorialsByDifficulty(difficulty) {
    return tutorialContent.filter(tutorial => tutorial.difficulty === difficulty);
  }

  async searchTutorials(query) {
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

  async getTutorialSections(tutorialId) {
    const tutorial = await this.getTutorialById(tutorialId);
    return tutorial?.sections || [];
  }

  async getTutorialLessons(tutorialId, sectionId) {
    const tutorial = await this.getTutorialById(tutorialId);
    if (!tutorial) return [];

    if (sectionId) {
      const section = tutorial.sections.find(s => s.id === sectionId);
      return section?.lessons || [];
    }

    // Return all lessons from all sections
    return tutorial.sections.flatMap(section => section.lessons);
  }

  async getLesson(tutorialId, sectionId, lessonId) {
    const tutorial = await this.getTutorialById(tutorialId);
    if (!tutorial) return null;

    const section = tutorial.sections.find(s => s.id === sectionId);
    if (!section) return null;

    return section.lessons.find(l => l.id === lessonId) || null;
  }

  async getTutorialStats() {
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
    }, {});

    return {
      totalTutorials,
      totalSections,
      totalLessons,
      averageDuration,
      difficultyDistribution
    };
  }
}

module.exports = TutorialService;
