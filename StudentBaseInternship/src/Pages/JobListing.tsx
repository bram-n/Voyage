// JobListings.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobListings: React.FC = () => {
  const [jobData, setJobData] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get('https://serpapi.com/search?engine=google_jobs_listing&q=barista%20new%20york');
        setJobData(response.data?.jobs_results || []);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobData();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobData.map((job, index) => (
          <li key={index}>
            <h2>{job.title}</h2>
            <p>Company: {job.company_name}</p>
            <p>Location: {job.location}</p>
            <p>Description: {job.description}</p>
            {/* Add more details or styling as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
