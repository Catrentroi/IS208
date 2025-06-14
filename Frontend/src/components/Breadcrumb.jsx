import React from "react";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="py-4">
            <div className="container mx-auto px-6">
                <ol className="flex items-center space-x-2 text-black">
                    {items.map((item, index) => (
                        <li key={item.label || `breadcrumb-item-${index}`} className="flex items-center">
                            {index > 0 && <span className="mx-2 text-black font-bold text-xl"> &gt; </span>}
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="text-black font-bold text-xl hover:text-green-800 transition-colors"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-black font-bold text-xl">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;
