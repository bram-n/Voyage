import { promises as fs } from 'fs';
import Papa from 'papaparse';

const csvFilePath = "Data/DataAnalyst.csv";
const jsonFilePath = "Data/DataJSON.json";

const parseCSVtoJSON = async (csvFilePath, jsonFilePath) => {
  try {
    const csvFileContent = await fs.readFile(csvFilePath, 'utf8');

    const { data: jsonArray } = await new Promise((resolve) => {
      Papa.parse(csvFileContent, {
        complete: (result) => resolve(result),
        header: true,
      });
    });

    await fs.writeFile(jsonFilePath, JSON.stringify(jsonArray, null, 2));

    console.log('Conversion completed. JSON file saved:', jsonFilePath);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

parseCSVtoJSON(csvFilePath, jsonFilePath);
