import React from 'react';
import {Helmet} from 'react-helmet';
import {useAuth} from '../auth/AuthContext';

// -----------------------------------------------------------------------------
// Helper to prettify a username from an e‑mail address
// -----------------------------------------------------------------------------

const displayNameFromEmail = (email: string): string => {
    const namePart = email.split('@')[0];
    return namePart
        .replace(/[._-]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export default function ProfilePage() {
    const {user} = useAuth(); // `user` currently holds the e‑mail string

    const email = user ?? 'guest@example.com';
    const displayName = displayNameFromEmail(email);

    return (
        <>
            <Helmet>
                <title>{displayName}'s Profile | ProteinShaikh</title>
            </Helmet>

            {/* Hero section */}
            <section
                className="container mx-auto px-4 py-16 flex flex-col items-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-purple-50 text-center relative overflow-hidden animate-fade-in-down">
                {/* Avatar & basic info */}
                <div className="flex flex-col items-center mb-12">
                    <div
                        className="h-28 w-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-semibold shadow-lg">
                        {displayName.charAt(0)}
                    </div>
                    <h1 className="text-4xl font-bold mt-4 text-gray-800">{displayName}</h1>
                    <p className="text-gray-600">{email}</p>
                </div>

                {/* Account information card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-left">Account information</h2>
                    <div className="space-y-4 text-left">
                        <div>
                            <p className="text-sm text-gray-500">Member since</p>
                            <p className="text-xl font-medium text-gray-800">Jun 2025</p>
                        </div>
                        {/* Additional profile fields (phone, bio, etc.) can be added here */}
                    </div>
                </div>
            </section>
        </>
    );
}
