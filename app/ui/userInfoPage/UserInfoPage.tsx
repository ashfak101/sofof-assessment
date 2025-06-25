import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchema } from '~/utils/FormSchema';

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const UserInfoPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      address: '123 Main Street',
      city: 'New York',
      postalCode: '10001',
      country: 'United States',
    },
    mode: 'all',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Mock API call with setTimeout to simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful API response 
      if (Math.random() > 0.05) {
        console.log('Form submitted:', data);
        setSubmitStatus('success');
        alert('Profile updated successfully!');
      } else {
        // Simulate API error
        throw new Error('Network error');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setSubmitStatus('error');
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full max-w-[712px] px-4 sm:px-4 lg:px-0 mx-auto pb-20'>
      {/* Back button and title */}
      <div className='flex sm:flex-row items-start sm:items-center justify-between my-2 sm:my-4 gap-3 sm:gap-0'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <div
            className='bg-[#F3EFF6] bg-opacity-70 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-100'
            onClick={() => navigate('/')}>
            <IoIosArrowBack className='text-lg sm:text-xl' />
          </div>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[32px] xl:text-[40px] font-bold my-2 sm:my-4 md:my-6 text-[#222222]'>
            User Profile
          </h1>
        </div>
      </div>

      {/* User Info Form */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {/* Personal Information Section */}
          <div>
            <h2 className='text-xl font-medium text-[#222222] mb-4'>
              Personal Information
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  First Name
                </label>
                <input
                  id='firstName'
                  type='text'
                  className={`w-full p-2 border rounded-lg ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  Last Name
                </label>
                <input
                  id='lastName'
                  type='text'
                  className={`w-full p-2 border rounded-lg ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  className={`w-full p-2 border rounded-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  Phone Number
                </label>
                <input
                  id='phone'
                  type='tel'
                  className={`w-full p-2 border rounded-lg ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div>
            <h2 className='text-xl font-medium text-[#222222] mb-4'>
              Address Information
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='md:col-span-2'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  Street Address
                </label>
                <input
                  id='address'
                  type='text'
                  className={`w-full p-2 border rounded-lg ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('address')}
                />
                {errors.address && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  City
                </label>
                <input
                  id='city'
                  type='text'
                  className={`w-full p-2 border rounded-lg ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('city')}
                />
                {errors.city && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='postalCode'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  Postal Code
                </label>
                <input
                  id='postalCode'
                  type='text'
                  className={`w-full p-2 border rounded-lg ${
                    errors.postalCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('postalCode')}
                />
                {errors.postalCode && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.postalCode.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-[#616161] mb-1'>
                  Country
                </label>
                <select
                  id='country'
                  className={`w-full p-2 border rounded-lg ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('country')}>
                  <option value='United States'>United States</option>
                  <option value='Canada'>Canada</option>
                  <option value='United Kingdom'>United Kingdom</option>
                  <option value='Australia'>Australia</option>
                  <option value='Saudi Arabia'>Saudi Arabia</option>
                  <option value='UAE'>UAE</option>
                </select>
                {errors.country && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Form buttons */}
          <div className='flex justify-end space-x-4 pt-4'>
            <button
              type='button'
              onClick={() => navigate('/')}
              className='px-6 py-2 border border-gray-300 rounded-[18px] text-gray-700 hover:bg-gray-50'>
              Cancel
            </button>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`px-6 py-2 bg-[linear-gradient(94.96deg,_#65358A_0.14%,_#2B153C_100.14%)] text-white rounded-[18px] hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}>
              {isSubmitting ? 'Updating...' : 'Update Profile'}
            </button>
          </div>

          {/* Status message */}
          {submitStatus === 'success' && (
            <div className='p-3 bg-green-100 text-green-700 rounded-lg mt-4'>
              Profile updated successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className='p-3 bg-red-100 text-red-700 rounded-lg mt-4'>
              Failed to update profile. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserInfoPage;
