/* eslint-disable @next/next/no-img-element */
// React
import { useState, useEffect } from "react";

// Next JS
import Link from "next/link";

// External Libraries
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

// Dummy Variables
import { Courses } from "../dummy_data";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [displaySearch, setDisplaySearch] = useState(false);

    useEffect(() => {
        if (!search) {
            setResults([]);
            return;
        }

        const searchResults = Courses.filter((e) => {
            return (
                e.name.toLowerCase().startsWith(search.toLowerCase()) ||
                e.course_code === search.toUpperCase()
            );
        }).slice(0, 5);

        setResults(searchResults);
    }, [search]);

    return (
        <>
            <div
                className="w-full flex items-center justify-between px-[5%] py-2 border-b-2 border-primary"
                id="nav"
            >
                <div className="" id="nav-left">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            className="w-[70px] h-[70px]"
                            alt="EEE"
                        ></img>
                    </Link>
                </div>
                <div className="" id="nav-right">
                    <div className="bg-slate-300 p-3 w-60 lg:w-96 flex items-center gap-4">
                        <SearchSharpIcon className="text-primary" />
                        <input
                            type="text"
                            placeholder="Search course code"
                            className="bg-transparent w-full focus:outline-none"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            onFocus={() => setDisplaySearch(true)}
                            onBlur={() => setDisplaySearch(false)}
                        />
                    </div>

                    <div
                        className={
                            "fixed w-60 lg:w-96 bg-white shadow " +
                            (search && displaySearch ? "" : "hidden")
                        }
                    >
                        {results.length === 0 ? (
                            <div className="p-3">
                                <p className="text-gray-500 text-xs">
                                    No Courses Found
                                </p>
                            </div>
                        ) : null}
                        {results.map((e, i) => {
                            return (
                                <div
                                    className="px-5 py-3 hover:bg-gray-100 border-b"
                                    key={i}
                                >
                                    <h3 className="text-sm">{e.name}</h3>
                                    <p className="text-gray-500 text-xs">
                                        {e.course_code}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
