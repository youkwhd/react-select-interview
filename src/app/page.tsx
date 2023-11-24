"use client";

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
    return (
        <main>
            <input 
                type="checkbox"
                name="check-all"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e);
                }} />
            <label htmlFor="check-all">Select All</label>
            <ul>
                {countries.map((country: Country) => {
                    return (
                        <li key={`${country.id}`}>
                            <input 
                                type="checkbox"
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
