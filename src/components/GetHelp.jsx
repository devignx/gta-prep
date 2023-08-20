const ContactsPage = () => {
    const stressContacts = [
        {
            name: "Stress Support Line",
            number: "+91-1234567890",
            description: "Provides support for stress-related issues.",
            email: "stresssupport@example.com",
        },
        // Add more stress contacts here...
    ];

    const mentalSupportContacts = [
        {
            name: "Mental Health Hotline",
            number: "+91-5551234567",
            description: "For immediate mental health assistance.",
            email: "mentalhealth@example.com",
        },
        // Add more mental support contacts here...
    ];

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <h3 className="text-3xl font-bold mb-4">
                Reaching out for help is often the bravest thing someone can do
                in a difficult time.
            </h3>
            <div className="mb-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Talk with your manager or organization
                </button>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4">
                <h2 className="text-xl font-semibold mb-2">
                    Stress Support Contacts
                </h2>
                <ul className="list-disc pl-6">
                    {stressContacts.map((contact) => (
                        <li key={contact.name} className="mb-4">
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p>{contact.description}</p>
                            <p className="text-gray-600">{contact.number}</p>
                            <p className="text-gray-600">
                                Email: {contact.email}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-300 mt-4 pt-4">
                <h2 className="text-xl font-semibold mb-2">
                    Mental Support Contacts
                </h2>
                <ul className="list-disc pl-6">
                    {mentalSupportContacts.map((contact) => (
                        <li key={contact.name} className="mb-4">
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p>{contact.description}</p>
                            <p className="text-gray-600">{contact.number}</p>
                            <p className="text-gray-600">
                                Email: {contact.email}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactsPage;
