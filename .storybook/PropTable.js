import React from 'react';
import PropTable from '@storybook/addon-info/dist/components/PropTable';

function compare(a,b) {
  if (a.property < b.property)
    return -1;
  if (a.property > b.property)
    return 1;
  return 0;
}

const PropTypesTable = ({ propDefinitions, ...props }) => {
  propDefinitions.forEach((def) => {
    if (typeof def.propType === 'string') {
      def.propType = { name: def.propType };
    }
  });

  console.log(propDefinitions)

  const sortedPropDefs = propDefinitions.sort(compare);

  return <PropTable propDefinitions={sortedPropDefs} {...props} />;
};

export default PropTypesTable;
