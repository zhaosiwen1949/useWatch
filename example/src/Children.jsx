import React, { useState, useCallback } from 'react';

export default function Parent({name, onWatch}) {
    const [value, setValue] = useState(0);
    onWatch(value);
    
    const handleChange = useCallback((e) => setValue(e.target.value), []);

    return (
        <div>
            <span>{name}</span>
            <input value={value} onChange={handleChange} />
        </div>
    )
}