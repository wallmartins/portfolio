type experiecenceDateType = {
  startDate: string;
  endDate: string;
};

export interface ExperienceCardProps {
  experienceDate: experiecenceDateType;
  jobTitle: string;
  companyName: string;
  description: string;
  techs: string[];
  location: string;
}
