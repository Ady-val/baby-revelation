export function createProfileDescription(interests, behaviors, family_statuses) {
  // Type validation
  if (
    !Array.isArray(interests) ||
    !interests ||
    !Array.isArray(behaviors) ||
    !behaviors ||
    !Array.isArray(family_statuses) ||
    !family_statuses
  ) {
    return '';
  }

  // Local helper function
  const joinNames = (items, header) => {
    const names = items.map((item, index) => {
      if (!item) return '';

      const name = index === 0 ? `${header}: ${item.name}` : item.name;

      return name;
    });

    const joinedNames = names.join(', ');

    return joinedNames;
  };

  let description = joinNames(interests, 'Interests');
  description = description.concat(joinNames(behaviors, '\n Behaviors'));
  description = description.concat(joinNames(family_statuses, '\n Family Statuses'));

  return description;
}

export function indexToLetter(num) {
  const A = 'A'.charCodeAt(0);
  let numberToCharacter = number => {
    return String.fromCharCode(A + number);
  };
  return numberToCharacter(num);
}