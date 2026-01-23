'use client';

export default function TrustedClients() {
  const clients = [
    'Zero Cheating',
    'Al-Khalil',
    'Buraq',
    'Hiring Hash',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-purple-600 text-center mb-12">
          Trusted by our Leading Clientele
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-600 font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
