export const combineFields = (originalData, localData) => {
  const fields = originalData.map((field, i) => {
    const { ...restItem } = field || {};
    const { ...transItem } = localData[i] || {};
    return { ...restItem, ...transItem };
  });
  return fields;
};
