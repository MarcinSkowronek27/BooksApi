module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const [firstName, lastName, notAllowed] = fullName.split(' ');
  if(notAllowed) return 'Error';
  if (!firstName || !lastName) return 'Error';
  if(fullName.includes('.')||fullName.includes(',') || fullName.includes(';')) return 'Error';
  return firstName[0].toUpperCase() + (firstName.slice(1).toLowerCase()) + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
