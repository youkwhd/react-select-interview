"use client";

import { useState } from "react";

type Country = {
    id: number,
    name: string,
};

const countries: Country[] = [
    {
        id: 1,
        name: "India",
    },
    {
        id: 2,
        name: "USA",
    },
    {
        id: 3,
        name: "France",
    },
];


export default () => {
    const [eCountries, setECountries] = useState(countries.map((c: Country) => ({...c, checked: false})));
    
    return (
        <main>
            <input 
                type="checkbox"
                name="check-all"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setECountries((prev) => prev.map((c) => ({...c, checked: e.target.checked})))
                }} />
            <label htmlFor="check-all">Select All</label>
            <ul>
                {eCountries.map((country) => {
                    return (
                        <li key={`${country.id}`}>
                            <input 
                                type="checkbox"
                                checked={country.checked}
                                name={`country-${country.id}`}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    console.log(e.target.checked);
                                }} />
                            <label htmlFor={`country-${country.id}`}>{country.name}</label>
                        </li>
                    );
                })}
            </ul>
        </main>
    )
}
