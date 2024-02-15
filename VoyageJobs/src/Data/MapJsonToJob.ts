import Job from './JobDataType'
const mapJsonToJob = (data: any): Job => {
    return {
      id: data[''],
      jobTitle: data['Job Title'],
      salaryEstimate: data['Salary Estimate'],
      jobDescription: data['Job Description'],
      rating: data['Rating'],
      companyName: data['Company Name'],
      location: data['Location'],
      headquarters: data['Headquarters'],
      size: data['Size'],
      founded: data['Founded'],
      typeOfOwnership: data['Type of ownership'],
      industry: data['Industry'],
      sector: data['Sector'],
      revenue: data['Revenue'],
      competitors: data['Competitors'],
      easyApply: data['Easy Apply'],
    };
  };

export default mapJsonToJob;
