// src/components/UserProfile.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import UserProfile from './userProfile';

test('renders user profile data', async () => {
  // Mocking Axios for unit testing
  jest.mock('axios');
 
  axios.get.mockResolvedValue({ data: { name: 'John Doe', email: 'john@example.com' } });

  // Render the component with a mocked userId
  render(<UserProfile userId={1} />);

  // Check if the loading state is displayed initially
  expect(screen.getByText('Loading user data...')).toBeInTheDocument();

  // Wait for the component to render with fetched data
  const nameElement = await screen.findByText('John Doe');
  const emailElement = screen.getByText('Email: john@example.com');

  // Check if the user data is displayed correctly
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});