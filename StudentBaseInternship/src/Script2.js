import fs from 'fs/promises';

const jsonFilePath = "Data/DataJSON.json";

const cleanDataAndSaveJSON = async (jsonFilePath) => {
  try {
    const jsonData = await fs.readFile(jsonFilePath, 'utf8');
    const jsonArray = JSON.parse(jsonData);

    const cleanedDataJSON = jsonArray.map((entry) => ({
      ...entry,
      "Company Name": entry["Company Name"] ? entry["Company Name"].replace(/\n\d+(\.\d+)?/, '') : '',
    }));

    await fs.writeFile(jsonFilePath, JSON.stringify(cleanedDataJSON, null, 2));

    console.log('Data cleaned and saved to:', jsonFilePath);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

cleanDataAndSaveJSON(jsonFilePath);
