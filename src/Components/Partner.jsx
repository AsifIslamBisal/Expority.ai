import React from 'react';
import Ccredit from '../assets/PartnerLogo/Ccredit.png';
import jestter from '../assets/PartnerLogo/jestter.png';
import Maplecrest from '../assets/PartnerLogo/Maplecrest.png';
import NorthElectric from '../assets/PartnerLogo/The_North_Electric.png';

const Partner = () => {
    const partners = [
        { id: 1, logo: Ccredit, name: 'Ccredit' },
        { id: 2, logo: jestter, name: 'Jestter' },
        { id: 3, logo: Maplecrest, name: 'Maplecrest' },
        { id: 4, logo: NorthElectric, name: 'North Electric' },
    ];

    return (
        <section className="py-16 bg-linear-to-br from-white via-cyan-50/30 to-white">
            <div className="max-w-7xl mx-auto px-6">
                
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Trusted by Industry Leaders
                    </h2>
                    
                </div>

                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                    {partners.map((partner) => (
                        <div 
                            key={partner.id} 
                            className="group relative flex items-center justify-center overflow-hidden p-4 cursor-pointer"
                        >
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />

                            
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-gray-200/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Partner;