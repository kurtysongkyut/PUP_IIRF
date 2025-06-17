import React, { useEffect } from 'react';
import { supabase } from './supabaseClient';

// Example: Fetch data from a table called 'students'
async function fetchStudents() {
  const { data, error } = await supabase.from('students').select('*');
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

const Students = () => {
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {/* Render your students data here */}
    </div>
  );
};

export default Students;