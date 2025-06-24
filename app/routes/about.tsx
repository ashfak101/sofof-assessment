import type { Route } from "../+types/root"




export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Us' },
    {
      name: 'description',
      content: 'Learn more about our company and mission',
    },
  ];
}

export default function About() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-blue-700 dark:text-blue-500 mb-6'>
          About Us
        </h1>

        <section className='mb-10'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Our Mission
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            We are dedicated to building innovative solutions that solve
            real-world problems. Our team of experts works tirelessly to create
            products that are not only functional but also intuitive and
            user-friendly.
          </p>
          <p className='text-gray-700 dark:text-gray-300'>
            Founded in 2020, we've grown from a small startup to a recognized
            leader in our industry, helping clients transform their ideas into
            reality.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Our Team
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className='border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
                <div className='w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4'>
                  {/* Placeholder for team member image */}
                </div>
                <h3 className='text-lg font-medium text-center text-gray-800 dark:text-gray-200'>
                  {member.name}
                </h3>
                <p className='text-center text-gray-600 dark:text-gray-400'>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Our Values
          </h2>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300'>
            <li>
              <strong>Innovation:</strong> We constantly push the boundaries of
              what's possible.
            </li>
            <li>
              <strong>Quality:</strong> We take pride in delivering products
              that exceed expectations.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of
              teamwork and open communication.
            </li>
            <li>
              <strong>Integrity:</strong> We conduct our business with honesty
              and transparency.
            </li>
            <li>
              <strong>Customer Focus:</strong> Our clients' success is our
              success.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Contact Us
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Have questions or want to learn more about our services? We'd love
            to hear from you!
          </p>
          <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg'>
            <p className='text-gray-700 dark:text-gray-300'>
              Email: info@example.com
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
              Phone: (123) 456-7890
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

const teamMembers = [
  { name: 'Jane Doe', role: 'CEO & Founder' },
  { name: 'John Smith', role: 'CTO' },
  { name: 'Alice Johnson', role: 'Lead Designer' },
  { name: 'Bob Brown', role: 'Senior Developer' },
  { name: 'Emma Wilson', role: 'Marketing Director' },
  { name: 'Michael Lee', role: 'Product Manager' },
];
