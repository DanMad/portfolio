const getRefIndex = (refs) => {
  let refIndex = refs.current.findIndex((ref) =>
    ref.className.includes('active'),
  );

  return refIndex !== -1 ? refIndex : 0;
};

export { getRefIndex as default };
