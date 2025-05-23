import React from 'react';

function Footer() {
    return (
        <footer className="bg-white shadow mt-8">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600">
                &copy; {new Date().getFullYear()} ProteinShaikh. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
