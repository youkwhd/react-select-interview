"use client";

import { useState } from "react";
import Link from "next/link";

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
        <main className="app--wrapper">
            <h1>
                React Select Interview
            </h1>
            <p>
                <Link href="https://github.com/youkwhd">youkwhd</Link>'s solution to a react interview question taken from <Link href="https://www.reddit.com/r/reactjs/comments/181bwix/please_help_why_was_i_rejected_in_my_frontend_1st/">this reddit post</Link>.
            </p>
            <input 
                type="checkbox"
                name="check-all"
                checked={eCountries.every((c) => c.checked)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setECountries((prev) => prev.map((c) => ({...c, checked: e.target.checked})))} />
            <label htmlFor="check-all">Select All</label>
            <ul>
                {eCountries.map((country: Country & {checked: boolean}) => (
                    <li key={`${country.id}`}>
                        <input 
                            type="checkbox"
                            checked={country.checked}
                            name={`country-${country.id}`}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setECountries((prev) => prev.map((c) => {
                                    if (c.id == country.id)
                                        c.checked = e.target.checked;

                                    return c;
                                }))
                            }} />
                        <label htmlFor={`country-${country.id}`}>{country.name}</label>
                    </li>
                ))}
            </ul>
        </main>
    );
};
