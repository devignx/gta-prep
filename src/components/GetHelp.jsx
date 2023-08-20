import useStore from "../store/store";

const ContactsPage = () => {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));

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
        <div
            className={` ${
                theme === "default" ? "text-black" : "text-white"
            } max-w-4xl  mx-auto mt-8 p-4`}
        >
            <h3 className="text-3xl font-bold mb-4">
                Reaching out for help is often the bravest thing someone can do
                in a difficult time.
            </h3>
            <div className="mb-4">
                <button className="bg-white border mx-auto block my-6 rounded-full text-black font-semibold py-3 px-6">
                    Talk with your manager or organization
                </button>
            </div>
            <div className="mt-4 pt-4">
                <h2 className="text-xl font-semibold mb-2">
                    Stress Support Contacts
                </h2>
                <ul className="list-disc pl-6">
                    {stressContacts.map((contact) => (
                        <li key={contact.name} className="mb-4">
                            <h3 className="font-semibold mt-3">
                                {contact.name}
                            </h3>
                            <p className="text-sm opacity-70 font-light mt-3">
                                {contact.description}
                            </p>
                            <p className="text-sm opacity-70 font-light">
                                {contact.number}
                            </p>
                            <p className="text-sm opacity-70 font-light">
                                Email: {contact.email}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className=" mt-4 pt-4">
                <h2 className="text-xl font-semibold mt-3">
                    Mental Support Contacts
                </h2>
                <ul className="list-disc pl-6">
                    {mentalSupportContacts.map((contact) => (
                        <li key={contact.name} className="mb-4 mt-3">
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm opacity-70 font-light mt-3">
                                {contact.description}
                            </p>
                            <p className="text-sm opacity-70 font-light">
                                {contact.number}
                            </p>
                            <p className="text-sm opacity-70 font-light">
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
