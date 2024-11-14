import { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
  <div>
    <input
        id="color"
        type="text"
        placeholder="Choose a color"
        value={value}
        onChange={handleChange}
      />
      <div className='container'>
      {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </div>
  );
}

export default MyForm;