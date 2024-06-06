const getCountryContent = ({ countryID, content, capitalize }) => {
  if (capitalize) {
    if (countryID === "elsalvador") return "El Salvador";
    return countryID.substring(0, 1).toUpperCase() + countryID.substring(1);
  }

  const newContent = content[countryID];

  if (!newContent) {
    return content?.["guatemala"];
  }

  return newContent;
};

export default getCountryContent;
